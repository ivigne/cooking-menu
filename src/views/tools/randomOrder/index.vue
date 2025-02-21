<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-08-07 17:22:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-18 14:23:35
 * @FilePath: /cooking-menu/src/views/tools/randomOrder/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <Card hoverable style="width: 300px">
      <template #cover>
        <Image :alt="result?.title" :src="result?.imgUrl" />
      </template>
      <template #title>{{ result?.title }}</template>
      <template #actions>
        <Space direction="vertical">
          <Select
            v-bind="selectValue"
            @change="handleChange"
            size="small"
            :options="menuOptions"
            show-search
            placeholder="支持搜索"
            :filter-option="filterOption"
          />
          <Button @click="startOrdering()"> {{ startOrderingText }} </Button>
        </Space>
      </template>
      <!-- <CardMeta>
                <template #title>
                  <TypographyText :content="item.name" :ellipsis="{ tooltip: item.address }" />
                </template>
                <template #description>{{ item.time }}</template>
              </CardMeta> -->
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  import { Select, Card, Image, Button, Space } from 'ant-design-vue';
  // import { useI18n } from '/@/hooks/web/useI18n';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage } = useMessage();

  // const { t } = useI18n();
  const selectValue = ref<any>(null);
  const menuOptions = ref<any>(null);
  const startOrderingText = ref<any>('开始点菜');
  const mytime = ref<any>(null);
  const result = ref<any>({
    title: '艾瑞巴蒂，准备好了吗？',
  });

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
    var i = Math.floor(Math.random() * 100) % namelist.length;
    console.log(i);
    result.value = namelist[i];
    mytime.value = setTimeout('show()', 1);
  };
  const handleChange = (val) => {
    console.log(val);
  };
  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
</script>
