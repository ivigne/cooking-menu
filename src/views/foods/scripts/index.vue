<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-13 12:04:32
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-20 11:27:56
 * @FilePath: /cooking-menu/src/views/foods/scripts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <BasicTable @register="registerTable" />
    <!-- 省市区/县 菜名 配料  方法 技术总结 -->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'FoodScripts',
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
