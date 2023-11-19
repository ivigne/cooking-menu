<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-15 16:02:08
 * @FilePath: /cooking-menu/src/views/more/tea/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-button type="link" @click="(e) => routerPage(e, '/foods/details', record)">{{
            t('routes.basic.foodsDetail')
          }}</a-button>
          <a-button type="link" @click="(e) => routerPage(e, '/foods/scripts', record)">{{
            t('routes.basic.foodsScripts')
          }}</a-button>
        </template>
      </template>
    </BasicTable>
    <!-- 省市区/县 菜名 配料  方法 技术总结 -->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'CargoOwners',
  };
</script>
<script lang="ts" setup>
  // import { unref } from 'vue';
  import { formConfig, tableColumnsConfig } from '../data';
  import { teaFoodsList } from './tea';
  import { BasicTable, useTable } from '/@/components/Table';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { router } from '/@/router';

  const { t } = useI18n();
  console.log('tableData', teaFoodsList);
  // const { createConfirm, createMessage } = useMessage();

  const [registerTable] = useTable({
    dataSource: teaFoodsList,
    columns: tableColumnsConfig,
    formConfig: formConfig,
    isTreeTable: true,
    useSearchForm: true,
    bordered: true,
    showTableSetting: true,
    size: 'small',
    tableSetting: { fullScreen: false },
    showIndexColumn: false,
    pagination: { pageSize: 10 },
    actionColumn: {
      title: t('common.operationText'),
      width: 280,
      dataIndex: 'action',
    },
  });
  const routerPage = (e, url, record) => {
    console.log(router, record, record?.scripts);
    e.stopPropagation();
    console.log('qing', url);
    localStorage.setItem('prevRecordData', JSON.stringify(record?.scripts));
    router.push(url);
  };
</script>
