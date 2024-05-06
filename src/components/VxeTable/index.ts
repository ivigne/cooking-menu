/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-03-11 13:39:32
 * @FilePath: /cooking-menu/src/components/VxeTable/index.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { withInstall } from '/@/utils';
import vxeBasicTable from './src/VxeBasicTable';
import { VXETable } from 'vxe-table';
import VXETablePluginAntd from './src/components';
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx';
import './src/setting';

export const VxeBasicTable = withInstall(vxeBasicTable);
export * from 'vxe-table';
export * from './src/types';

VXETable.use(VXETablePluginAntd).use(VXETablePluginExportXLSX);
