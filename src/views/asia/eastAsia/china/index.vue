import { ref } from 'vue';
<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-11 14:38:35
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FoodsTable :objData="chinaTableData" type="china" />
  </div>
</template>
<script lang="ts">
  export default {
    name: 'EastAsiaChina',
  };
</script>
<script lang="ts" setup>
  import { cityList } from '/@/common/city';
  import { chinaTableData } from './data';
  import FoodsTable from '/@/views/components/foodsTable.vue';
  let sum = 0;
  cityList.map((item) => {
    console.log(`${item.value}: 有${item.children.length}个城市`);
    sum += item.children.length;
  });
  console.log(`一共有${sum}个城市`);
  // const tableData = ref([]);
  // tableData.value = chinaTableData['siChuan'];
  // const handleProvince = (code) => {
  //   console.log('handleProvince', code, chinaTableData[code]);
  //   tableData.value = chinaTableData[code];
  // };
</script>
../../../../common/city
