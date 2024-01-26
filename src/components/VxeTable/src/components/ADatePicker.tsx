import { VxeGlobalRendererHandles } from 'vxe-table';
import XEUtils from 'xe-utils';
import {
  createCellRender,
  createEditRender,
  createExportMethod,
  createFormItemRender,
} from './common';

export function getDatePickerCellValue(
  _renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderCellParams | VxeGlobalRendererHandles.ExportMethodParams,
) {
  const { row, column } = params;
  const cellValue = XEUtils.get(row, column.field as string);

  return cellValue;
}

export default {
  renderEdit: createEditRender(),
  renderCell: createCellRender(getDatePickerCellValue, () => {
    return ['YYYY-MM-DD'];
  }),
  renderItemContent: createFormItemRender(),
  exportMethod: createExportMethod(getDatePickerCellValue, () => {
    return ['YYYY-MM-DD'];
  }),
};
