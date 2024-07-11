<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-05 11:36:32
 * @FilePath: /cooking-menu/src/views/staples/bun/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FoodsTable :data="bunFoodsList" />
  </div>
</template>
<script lang="ts" setup>
  import FoodsTable from '/@/views/components/foodsTable.vue';
  import { bunFoodsList } from './bun';
  import IndexDB from '/@/utils/storage';
  IndexDB.add({ name: '李青测试', age: 15 });
  const data = IndexDB.getAll();
  console.log(data);
</script>
