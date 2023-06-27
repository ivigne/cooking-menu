import * as xlsx from 'xlsx';
import type { WorkBook } from 'xlsx';
import type { JsonToSheet, AoAToSheet, DomToSheet } from './typing';
import {
  template_WorkBook,
  template_ExcelWorksheet,
  template_ListWorksheet,
  template_HTMLWorksheet,
} from './template';

const { utils, writeFile } = xlsx;

const DEF_FILE_NAME = 'excel-list.xlsx';

export function jsonToSheetXlsx<T = any>({
  data,
  header,
  filename = DEF_FILE_NAME,
  json2sheetOpts = {},
  write2excelOpts = { bookType: 'xlsx' },
}: JsonToSheet<T>) {
  const arrData = [...data];
  if (header) {
    arrData.unshift(header);
    json2sheetOpts.skipHeader = true;
  }

  const worksheet = utils.json_to_sheet(arrData, json2sheetOpts);

  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet,
    },
  };
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts);
  /* at this point, out.xlsb will have been downloaded */
}

export function aoaToSheetXlsx<T = any>({
  data,
  header,
  filename = DEF_FILE_NAME,
  write2excelOpts = { bookType: 'xlsx' },
}: AoAToSheet<T>) {
  const arrData = [...data];
  if (header) {
    arrData.unshift(header);
  }

  const worksheet = utils.aoa_to_sheet(arrData);

  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet,
    },
  };
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts);
  /* at this point, out.xlsb will have been downloaded */
}
export function aoaToSheetsXlsx<T = any>({
  data,
  filename = DEF_FILE_NAME,
  write2excelOpts = { bookType: 'xlsx' },
}: {
  data: { sheetName: string; content: T[][]; header: T[] }[];
  filename: string;
  write2excelOpts?: any;
}) {
  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [],
    Sheets: {},
  };

  data.forEach((item) => {
    const arrData = [...item.content];

    arrData.unshift(item.header);

    const worksheet = utils.aoa_to_sheet(arrData);

    workbook.SheetNames.push(item.sheetName);
    workbook.Sheets[item.sheetName] = worksheet;
  });

  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts);
  /* at this point, out.xlsb will have been downloaded */
}

/**
 * 支持多个Table导出，可分别指定 Sheet 名称
 * 带Table行内样式
 * @param param0
 */
export function domToSheetXlsx({ tables, filename = DEF_FILE_NAME }: DomToSheet) {
  const format = function (s, c) {
    return s.replace(/{(\w+)}/g, function (_m, p) {
      return c[p];
    });
  };
  const context_WorkBook = {
    ExcelWorksheets: '',
    HTMLWorksheets: '',
    ListWorksheets: '',
  };

  tables.forEach((item, index) => {
    context_WorkBook.ExcelWorksheets += format(template_ExcelWorksheet, {
      SheetIndex: index + 1,
      SheetName: item.tableName || `Sheet${index + 1}`,
    });

    context_WorkBook.HTMLWorksheets += format(template_HTMLWorksheet, {
      SheetIndex: index + 1,
      SheetContent: item.table?.outerHTML,
    });

    context_WorkBook.ListWorksheets += format(template_ListWorksheet, {
      SheetIndex: index + 1,
    });
  });

  const a = document.createElement('a');
  a.download = filename;
  const s = new Blob([format(template_WorkBook, context_WorkBook)], {
    type: 'application/vnd.ms-excel',
  });
  a.href = URL.createObjectURL(s);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
