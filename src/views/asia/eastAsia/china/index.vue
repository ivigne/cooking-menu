<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-20 14:55:53
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
  import { formConfig, tableColumnsConfig } from './config';
  import { chinaTableData } from './data';
  import { BasicTable, useTable } from '/@/components/Table';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { router } from '/@/router';

  const { t } = useI18n();
  console.log('tableData', chinaTableData['siChuan']);
  // const { createConfirm, createMessage } = useMessage();

  const [registerTable] = useTable({
    dataSource: chinaTableData['siChuan'],
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
    console.log(router, record);
    e.stopPropagation();
    console.log('qing', url);
    router.push(url);
  };
</script>
