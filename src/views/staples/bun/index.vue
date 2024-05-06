<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-11 15:44:33
 * @FilePath: /cooking-menu/src/views/staples/bun/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- <VxeBasicTable ref="tableRef" v-bind="gridOptions" /> -->

    <FoodsTable :data="tableData" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import FoodsTable from '/@/views/components/foodsTable.vue';
  import { bunFoodsList } from './bun';
  // import { tableColumnsConfigVxe, formConfigVxe } from '/@/common/commonConfig';
  // import { VxeBasicTable, BasicTableProps, CustomVxeGridInstance } from '/@/components/VxeTable';
  // const tableRef = ref<CustomVxeGridInstance>();

  const tableData = ref([]);
  tableData.value = bunFoodsList;
  // console.log('tableData', bunFoodsList);
  // const gridOptions = reactive<BasicTableProps>({
  //   height: 'auto',
  //   columns: tableColumnsConfigVxe,
  //   formConfig: {
  //     enabled: false,
  //     items: formConfigVxe,
  //   },
  //   checkboxConfig: {
  //     checkField: '_checked',
  //   },
  //   proxyConfig: {
  //     enabled: false,
  //     autoLoad: false,
  //   },
  // });
  // onMounted(() => {
  //   tableRef.value?.reloadData(tableData.value);
  // });
</script>
