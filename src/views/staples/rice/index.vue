<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-17 17:19:26
 * @FilePath: /cooking-menu/src/views/staples/rice/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FoodsTable :data="riceFoodsList" />
  </div>
</template>
<script lang="ts" setup>
  import FoodsTable from '/@/views/components/foodsTable.vue';
  import { riceFoodsList } from './rice';
  import { names } from '../handle';
  console.log('所有没有确定城市的食物', names.value);

  console.log('tableData', riceFoodsList);
</script>
