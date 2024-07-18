<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-18 08:44:51
 * @FilePath: /cooking-menu/src/views/more/formulasConversion/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="formulas_foods_container">
    <ul>
      <li v-for="(item, i) in formulasData" :key="i">
        <h2 class="title"
          >{{ item.title }}
          <span class="star"
            >推荐指数：<span class="star">{{ item.starLevel }}</span
            >颗星</span
          ></h2
        >
        <div class="before" v-for="(subItem, j) in item.keys" :key="j">
          <label class="name">{{ item['itemName' + j] }}：</label>
          <span class="value"> {{ item[subItem] }} </span>
          <span class="unit"> {{ item['itemUnit' + j] }}</span
          >、
        </div>
        <label class="target_name">主料目标换算值：</label>
        <InputNumber
          class="calc"
          v-model:value="item.calcFactor"
          @blur="(e) => changeCalcFactor(e, item)"
        />
        <br />
        <div class="after" v-for="(subItem, j) in item.keys" :key="j">
          <template v-if="j != 0">
            <label class="name">{{ item['itemName' + j] }}：</label>
            <span class="value"> {{ item[subItem + 'New'] }}</span
            >、
            <!-- <span class="unit"> {{ item['itemUnit' + j] }} </span> -->
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from '@vue/runtime-core';
  import { formulasFoodsList } from './formulas.data';
  import { InputNumber } from 'ant-design-vue';
  const formulasData = ref(formulasFoodsList);
  formulasFoodsList.map((item) => {
    item['keys'] = Object.keys(item).filter((subItem) => subItem.includes('itemVal')) as any;
    // item['keys'].map((subItem) => item[subItem + 'New'] = 0)
  });
  console.log('formulasFoodsList', formulasFoodsList);

  // console.log('tableData', chutneyFoodsList);
  const changeCalcFactor = (e, item) => {
    e && e.stopPropagation();
    if (!item.calcFactor) return false;
    const calcVal = item.calcFactor / item.itemVal0;
    item.keys.map((subItem, i) => {
      i != 0 && (item[subItem + 'New'] = item[subItem] * calcVal);
    });
  };
</script>
<style lang="less" scoped>
  .formulas_foods_container {
    padding: 30px;
    background: #fff;
    width: 100%;

    ul {
      width: 100%;

      li {
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid rgb(255, 132, 0);

        .title {
          font-size: 18px;
          font-weight: 500;
          color: rgb(255, 132, 0);
        }

        // display: inline-flex;
        div {
          display: inline-block;
        }

        .target_name {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .name {
          // width: 64px;
          font-size: 16px;
          // font-weight: 500;
          color: #333;
          text-align: right;
          display: inline-grid;
          white-space: nowrap;
        }

        .value {
          // padding: 0 10px;
          width: 48px;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          text-align: right;
          display: inline-grid;
          white-space: nowrap;
          border-bottom: 1px solid #333;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .unit {
          width: 14px;
          // margin-right: 15px;
          font-size: 14px;
          color: #999;
          display: inline-grid;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }

        .before,
        .after {
          // margin-right: 15px;
          // border-right: 2px solid rgb(127, 204, 127);
          // width: 100%;
        }

        .calc {
          margin: 0 15px;
          font-size: 18px;
          font-weight: 500;
          color: red;
        }

        .after {
          // width: 100%;
        }
      }
    }
  }
</style>
