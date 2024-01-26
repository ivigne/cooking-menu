<template>
  <div class="cp_divider_wrap">
    <div class="cp_divider_title" :style="{ ...titleStyle }" v-show="props.title">{{
      props.title
    }}</div>
    <span class="cp_divider_tip" :style="{ ...tipStyle }">{{ props.tip }}</span>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { DividerStyle } from '../types/Divider';

  const props = defineProps({
    title: {
      type: String,
      default: () => '',
    },
    tip: {
      type: String,
      default: () => '',
    },
    style: {
      type: Object as PropType<DividerStyle>,
      default: () => {
        return {};
      },
    },
  });

  const titleStyle = computed(() => {
    const { titleFontColor, titleBackgroudColor, titleWidth } = props.style;
    const obj = {};
    titleFontColor && (obj['color'] = titleFontColor);
    titleBackgroudColor && (obj['background'] = titleBackgroudColor);
    titleWidth && (obj['width'] = titleWidth);
    return obj;
  });

  const tipStyle = computed(() => {
    const { tipFontColor } = props.style;
    const obj = {};
    tipFontColor && (obj['color'] = tipFontColor);
    return obj;
  });
</script>
<style lang="less" scoped>
  .cp_divider_wrap {
    border-bottom: 1px solid #e8e8e8;
    width: 100%;

    .cp_divider_title {
      display: inline-block;
      padding: 0 14px;
      font-size: 14px;
      font-weight: 500;
      background: #0960bd;
      color: white;
      margin-right: 16px;
      text-align: center;
    }

    .cp_divider_tip {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ed7b2f;
    }
  }
</style>
