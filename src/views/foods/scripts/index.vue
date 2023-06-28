<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-13 12:04:32
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2023-06-28 14:03:54
 * @FilePath: /cooking-menu/src/views/foods/scripts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <BasicTable
      ref="printContent"
      @register="registerTable"
      :rowSelection="{
        type: 'checkbox',
        selectedRowKeys: checkedKeys,
        onChange: onSelectChange,
        fixed: true,
      }"
    >
      <template #toolbar>
        <a-button type="primary" @click="onPrint">打印</a-button>
        <a-button type="success" @click="handleExportXLSX">导出</a-button>
      </template>
    </BasicTable>
    <!-- 省市区/县 菜名 配料  方法 技术总结 -->
  </PageWrapper>
</template>
<script lang="ts">
  export default {
    name: 'FoodScripts',
  };
</script>
<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import dayjs from 'dayjs';
  import { tableColumnsConfig } from './data';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  // import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import printJS from 'print-js';
  import { aoaToSheetXlsx } from '/@/components/Excel/src/Export2Excel';
  import { isFunction } from '/@/utils/is';

  const { createMessage } = useMessage();

  const { t } = useI18n();
  const printContent = ref<ElRef>(null);
  // const loadingRef = ref(false); // 页面Loading
  const checkedKeys = ref<(string | number)[]>([]); // 选中的行
  console.log('tableData', t);
  const tableData = ref<any>([]);
  tableData.value = JSON.parse(localStorage.getItem('prevRecordData') || '') || [];

  const [registerTable, {}] = useTable({
    dataSource: unref(tableData),
    columns: tableColumnsConfig,
    isTreeTable: true,
    useSearchForm: true,
    pagination: false,
    bordered: true,
    showTableSetting: true,
    size: 'small',
    tableSetting: { fullScreen: false },
    showIndexColumn: false,
  });
  /*
   * 表格选中监听
   * @param selectedRowKeys
   */
  const onSelectChange = (selectedRowKeys: (string | number)[]) => {
    checkedKeys.value = selectedRowKeys;
  };

  /**
   * 打印插件
   */
  const onPrint = () => {
    printJS({
      printable: printContent.value,
      type: 'html',
      targetStyles: ['*'],
    });
  };

  /**
   * 导出查询结果数据
   */
  const handleExportXLSX = () => {
    const exportTableHeaders = tableColumnsConfig.map((column) => column.title as string);
    const formatData = tableData.value.map((item, index) => {
      return tableColumnsConfig.map((column) => {
        let value = item[column.dataIndex as string];
        return isFunction(column.format)
          ? column.format(value, item, index)
          : value === null || value === undefined
          ? ''
          : `${value}`;
      });
    });
    aoaToSheetXlsx({
      data: formatData,
      header: exportTableHeaders,
      filename: `脚本-${dayjs().format('YYYY-MM-DD')}.xlsx`,
    });
    createMessage.success('导出成功');
  };
</script>
