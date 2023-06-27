<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-13 12:04:32
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2023-06-27 19:31:39
 * @FilePath: /cooking-menu/src/views/foods/scripts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <BasicTable
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
        <a-button type="success" @click="onExport">导出</a-button>
      </template>
      ></BasicTable
    >/>
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
  import { tableColumnsConfig } from './config';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  // import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import printJS from 'print-js';
  import { aoaToSheetXlsx } from '/@/components/Excel/src/Export2Excel';

  const { createMessage } = useMessage();

  const { t } = useI18n();
  const loadingRef = ref(false); // 页面Loading
  const checkedKeys = ref<(string | number)[]>([]); // 选中的行
  console.log('tableData', t);
  const list = ref<any>([]);
  list.value = JSON.parse(localStorage.getItem('prevRecordData') || '') || [];

  const [registerTable, {}] = useTable({
    dataSource: unref(list),
    columns: tableColumnsConfig,
    isTreeTable: true,
    useSearchForm: true,
    pagination: false,
    bordered: true,
    showTableSetting: true,
    size: 'small',
    tableSetting: { fullScreen: false },
    showIndexColumn: false,
    pagination: { pageSize: 10 },
  });
  /*
   * 表格选中监听
   * @param selectedRowKeys
   */
  const onSelectChange = (selectedRowKeys: (string | number)[]) => {
    checkedKeys.value = selectedRowKeys;
  };
  // console.log('-----', list.value);
  // console.log('+++-----', unref(list), typeof list.value);
  // setTableData(list.value);

  /**
   * 打印插件
   */
  const onPrint = () => {
    printJS({
      printable: 'printContent',
      type: 'html',
      targetStyles: ['*'],
    });
  };

  /**
   * 导出查询结果数据
   */
  const onExport = () => {
    loadingRef.value = true;
    const fileds = tableRef.value?.getProxyInfo()?.form;

    if (fileds['rangeDate'] && fileds['rangeDate'].length > 0) {
      fileds.creTimeStart = fileds['rangeDate'][0].valueOf();
      fileds.creTimeEnd = fileds['rangeDate'][1].valueOf();
    }

    postCrateTrackingExportApi({ ...fileds, rangeDate: undefined })
      .then((res) => {
        loadingRef.value = false;

        handleExportXLSX(res || {});

        createMessage.success('导出成功');
      })
      .catch(() => {
        loadingRef.value = false;
      });
  };
  /**
   * 导出数据为Excel表格
   */
  const handleExportXLSX = (data) => {
    const xlsxData: { header: string[]; content: [][]; sheetName: string }[] = []; // 导出的整体数据包

    const dataSource = [
      {
        data: data?.pickCartList || [],
        sheetName: '周转箱跟踪报表',
        header: exportCrateTrackingListConfig,
      },
      {
        data: data?.pickCartItemList || [],
        sheetName: '商品明细',
        header: exportCrateTrackingDetailConfig,
      },
    ];

    dataSource.forEach((sheet) => {
      const headerTitleList = sheet.header.map((column) => column.title as string);
      const formatData = sheet.data.map((row, index) => {
        return sheet.header.map((column) => {
          let value = row[column.dataIndex as string];

          return isFunction(column.format)
            ? column.format(value, row, index)
            : value === null || value === undefined
            ? ''
            : `${value}`;
        });
      });

      xlsxData.push({
        header: headerTitleList,
        content: formatData,
        sheetName: sheet.sheetName,
      });
    });

    aoaToSheetXlsx({
      data: xlsxData,
      filename: `周转箱跟踪报表-${dayjs().format('YYYY-MM-DD')}.xlsx`,
    });
  };
</script>
