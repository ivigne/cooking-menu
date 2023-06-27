/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-01 10:44:38
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2023-06-27 17:47:40
 * @FilePath: /cooking-menu/src/components/Excel/src/typing.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import type { JSON2SheetOpts, WritingOptions, BookType } from 'xlsx';

export interface ExcelData<T = any> {
  header: string[];
  results: T[];
  meta: { sheetName: string };
}

export interface JsonToSheet<T = any> {
  data: T[];
  header?: T;
  filename?: string;
  json2sheetOpts?: JSON2SheetOpts;
  write2excelOpts?: WritingOptions;
}

export interface AoAToSheet<T = any> {
  data: T[][];
  header?: T[];
  filename?: string;
  write2excelOpts?: WritingOptions;
}

export interface ExportModalResult {
  filename: string;
  bookType: BookType;
}

export interface DomToSheet {
  tables: Array<domTable>;
  filename?: string;
}

export interface domTable {
  table: Element | undefined;
  tableName?: string;
}
