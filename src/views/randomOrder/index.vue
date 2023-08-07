<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-08-07 17:22:10
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2023-08-07 18:23:21
 * @FilePath: /cooking-menu/src/views/randomOrder/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <div>{{ orderInput }}</div>
    <div ref="startOrdering" onclick="startOrdering()">{{ startOrderingText }}</div>
  </PageWrapper>
</template>
<script lang="ts">
  export default {
    name: 'RandomOrder',
  };
</script>
<script lang="ts" setup>
  import { ref } from 'vue';
  // import { useI18n } from '/@/hooks/web/useI18n';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage } = useMessage();

  // const { t } = useI18n();
  const orderInput = ref<any>('艾瑞巴蒂，准备好了吗？');
  const startOrderingText = ref<any>('开始点菜');
  // const startOrdering = ref<any>();
  const mytime = ref<any>(null);

  const namelist = ['吴亦凡', '王俊凯', '王一博', '刘昊然', '黄俊捷', '何洛洛', '刘特', '许凯'];
  const startOrdering = () => {
    if (mytime.value == null) {
      startOrderingText.value = '停止点名';
      show();
    } else {
      startOrderingText.value = '开始点名';
      clearTimeout(mytime);
      mytime.value = null;
    }
  };
  const show = () => {
    var num = Math.floor(Math.random() * 100) % namelist.length;
    console.log(num);
    orderInput.value = namelist[num];
    mytime.value = setTimeout('show()', 1);
  };
</script>
