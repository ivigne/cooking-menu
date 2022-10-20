<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-13 12:03:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-20 14:50:25
 * @FilePath: /cooking-menu/src/views/foods/details/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <PageWrapper title="基础详情页" contentBackground>
    <!-- <Description
      size="middle"
      title="用户信息"
      :bordered="false"
      :column="3"
      :data="personData"
      :schema="personSchema"
    /> -->
    <a-divider />
    <div class="pt-4 m-4 desc-wrap">
      <a-card title="用户信息" :bordered="false" class="mt-5">
        <a-descriptions title="信息组" :column="3">
          <a-descriptions-item label="简介">{{ personData.introduction }}</a-descriptions-item>
          <a-descriptions-item label="故事背景">
            {{ personData.storyBackground }}
          </a-descriptions-item>
          <a-descriptions-item label="原料"> {{ personData.ingredients }} </a-descriptions-item>
        </a-descriptions>

        <a-card title="多层级信息组">
          <a-descriptions title="制作过程" :column="3">
            <a-descriptions-item
              v-for="(item, index) in personData.productionProcess"
              :key="index"
              :label="'' + stepArr[index]"
            >
              {{ item.stepDesc }}
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="营养价值" :column="1">
            <a-descriptions-item
              v-for="(item, index) in personData.nutritionalValue"
              :key="index"
              :label="'' + stepArr[index]"
            >
              {{ item.stepDesc }}
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="食用功效" :column="1">
            <a-descriptions-item
              v-for="(item, index) in personData.edibleEffects"
              :key="index"
              :label="'' + stepArr[index]"
            >
              {{ item.stepDesc }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="做法" :column="1">
            <a-descriptions-item
              v-for="(item, index) in personData.practiceList"
              :key="index"
              :label="'' + stepArr[index]"
            >
              {{ item.stepDesc }}
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-card>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  const personSchema = ref({});
  const personData = ref({});
  const stepArr = ref([]);
  stepArr.value = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
</script>
<style lang="less" scoped>
  .desc-wrap {
    padding: 16px;
    background-color: @component-background;
  }
</style>
