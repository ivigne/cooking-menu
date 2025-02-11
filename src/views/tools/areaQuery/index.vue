<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2025-02-11 13:21:59
 * @FilePath: /cooking-menu/src/views/tools/areaQuery/index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <Card hoverable>
      <template #title>城市过滤</template>
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <!-- <InputTextArea placeholder="需要发送到服务器的内容" :disabled="!getIsOpen" v-model:value="sendValue" allowClear /> -->
          <!-- <Button @click="startOrdering()"> {{ startOrderingText }} </Button> -->
          <!-- <Divider type="vertical" orientation="left" style="width: 100%">常规数组处理</Divider> -->
          <BasicForm @register="registerForm" />
          <List>
            <ListItem>
              <ListItemMeta>
                <template #description>
                  <code ref="outputResult">
                    {{ arrayData }}
                    <br />
                    <br />
                  </code>
                </template>
              </ListItemMeta>
            </ListItem>
          </List>
        </Space>
      </template>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  // import { replaceAndSplitStr } from '/@/utils/general';
  import { ref } from 'vue';
  import { List, Card, Space } from 'ant-design-vue';
  // import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { BasicForm, useForm } from '/@/components/Form';
  // const { t } = useI18n();
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  const arrayData = ref('');
  import { cityList } from '/@/common/city';
  import {
    cityFirst,
    citySecond,
    cityThird,
    chinaAreaEastProvinceSouthLine,
    chinaAreaEastProvinceNorthLine,
    chinaAreaWestSouthProvinceSouthLine,
    chinaAreaWestSouthProvinceNorthLine,
    formSchemas,
  } from './data';

  //表单
  const [registerForm, { getFieldsValue }] = useForm({
    schemas: formSchemas(),
    labelWidth: 80,
    baseColProps: { span: 6 },
    actionColOptions: { span: 24 },
    autoSubmitOnEnter: true,
    submitFunc: () => handleSubmit(),
    resetFunc: () => handleTop100(),
    resetButtonOptions: {
      text: '百强城市路线查询',
    },
  });
  const handleSubmit = () => {
    console.log(getFieldsValue());
    return Promise.resolve();
  };
  const handleTop100 = async () => {
    const names = ref<any[]>(['华东-南方', '华东-北方', '西南-南方', '西南-北方']);
    const list = ref<any[]>([
      chinaAreaEastProvinceSouthLine,
      chinaAreaEastProvinceNorthLine,
      chinaAreaWestSouthProvinceSouthLine,
      chinaAreaWestSouthProvinceNorthLine,
    ]);
    // const cityData = ref<any[]>([cityFirst, citySecond, cityThird]);
    list.value.map(async (line, i) => {
      // 华东起点南方路线-城市
      // const chinaAreaEastProvinceCitySouthLine = ref<any[]>([]);
      const line0 = ref<string>(names.value[i] + '路线\n');
      const line1 = ref<string>(names.value[i] + '路线一线城市: \n');
      const line2 = ref<string>(names.value[i] + '路线二线城市: \n');
      const line3 = ref<string>(names.value[i] + '路线三线城市: \n');
      const line4 = ref<string>(names.value[i] + '路线一二线城市: \n');
      const line5 = ref<string>(names.value[i] + '路线一二三线城市: \n');
      const lineLen = ref(0);
      const line1Len = ref(0);
      const line2Len = ref(0);
      const line3Len = ref(0);
      const line4Len = ref(0);
      const line5Len = ref(0);
      await line?.map((name) => {
        cityList.filter((item) => {
          if (item.value.includes(name)) {
            const cityNameList = item.children.map((cl) => cl.value) || [];
            line0.value += name + ': (' + cityNameList?.join(',') + ')\n';
            // const cityFirstList = item.children.filter((cl) => cityFirst.includes(cl.value));
            let cityFirstList = cityFirst.filter((x) => cityNameList?.includes(x));
            line1.value +=
              name +
              (item.children?.length > 1 && cityFirstList.length > 0
                ? '(' + cityFirstList?.join(',') + ')'
                : '') +
              '->\n';
            // const citySecondList = item.children.filter((cl) => citySecond.includes(cl.value));
            let citySecondList = citySecond.filter((x) => cityNameList?.includes(x));
            line2.value +=
              name +
              (item.children?.length > 1 && citySecondList.length > 0
                ? '(' + citySecondList?.join(',') + ')'
                : '') +
              '->\n';
            // const cityThirdList = item.children.filter((cl) => cityThird.includes(cl.value));
            let cityThirdList = cityThird.filter((x) => cityNameList?.includes(x));
            line3.value +=
              name +
              (item.children?.length > 1 && cityThirdList.length > 0
                ? '(' + cityThirdList?.join(',') + ')'
                : '') +
              '->\n';
            // const cityFirstAndSecondList = item.children.filter(
            //   (cl) => cityFirst.includes(cl.value) || citySecond.includes(cl.value),
            // );
            let cityFirstAndSecondList =
              cityFirst.concat(citySecond).filter((x) => cityNameList?.includes(x)) || [];
            line4.value +=
              name +
              (item.children?.length > 1 && cityFirstAndSecondList.length > 0
                ? '(' + cityFirstAndSecondList?.join(',') + ')'
                : '') +
              '->\n';
            // const cityFirstAndSecondAndThirdList = item.children.filter(
            //   (cl) =>
            //     cityFirst.includes(cl.value) ||
            //     citySecond.includes(cl.value) ||
            //     cityThird.includes(cl.value),
            // );
            let cityFirstAndSecondAndThirdList =
              cityFirst.concat(citySecond, cityThird).filter((x) => cityNameList?.includes(x)) ||
              [];
            line5.value +=
              name +
              (item.children?.length > 1 && cityFirstAndSecondAndThirdList.length > 0
                ? '(' + cityFirstAndSecondAndThirdList?.join(',') + ')'
                : '') +
              '->\n';
            lineLen.value += item.children.length;
            line1Len.value += cityFirstList.length;
            line2Len.value += citySecondList.length;
            line3Len.value += cityThirdList.length;
            line4Len.value += cityFirstAndSecondList.length;
            line5Len.value += cityFirstAndSecondAndThirdList.length;
          }
        });
      });
      // console.log(line1Len.value);
      // console.log(line1.value, '\n\n\n');
      // console.log(line2Len.value);
      // console.log(line2.value, '\n\n\n');
      // console.log(line3Len.value);
      // console.log(line3.value, '\n\n\n');
      // console.log(line4Len.value);
      // console.log(line4.value, '\n\n\n');
      console.log(line5Len.value);
      console.log(line5.value, '\n\n\n');
      // console.log(lineLen.value);
      // console.log(line0.value, '\n\n\n');

      return Promise.resolve();
    });
  };
</script>
