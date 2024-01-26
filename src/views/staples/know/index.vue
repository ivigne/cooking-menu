<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-22 10:01:50
 * @FilePath: /cooking-menu/src/views/staples/know/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FoodsTable :data="tableData" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import FoodsTable from '/@/views/components/foodsTable.vue';
  import { knowFoodsList } from './know';

  const tableData = ref([]);
  tableData.value = knowFoodsList;
  console.log('tableData', knowFoodsList);
</script>
