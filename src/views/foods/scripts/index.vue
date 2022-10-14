<template>
  <div>
    <BasicTable @register="registerTable" />
    <!-- 省市区/县 菜名 配料  方法 技术总结 -->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'CargoOwners',
  };
</script>
<script lang="ts" setup>
  import { tableColumnsConfig } from './config';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();
  console.log('tableData', t);

  const [registerTable] = useTable({
    dataSource: [],
    columns: tableColumnsConfig,
    isTreeTable: true,
    useSearchForm: true,
    bordered: true,
    showTableSetting: true,
    size: 'small',
    tableSetting: { fullScreen: false },
    showIndexColumn: false,
    pagination: { pageSize: 10 },
  });
</script>
