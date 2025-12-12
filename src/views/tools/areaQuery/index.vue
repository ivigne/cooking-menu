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
          <Divider type="vertical" orientation="left" style="width: 100%">省市县处理</Divider>
          <AmapDistrictQuery />
          <Divider type="vertical" orientation="left" style="width: 100%"
            >各省市城市菜的数量排名</Divider
          >
          <Button @click="sortCookByCity">城市菜品数量排名</Button>
          <h2>华东-南方路线-第一次打卡的城市集合-总计有:</h2>
          <FoodsTable :objData="totalListByCity" />
        </Space>
      </template>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  // import { replaceAndSplitStr } from '/@/utils/general';
  import { ref } from 'vue';
  import { List, Card, Space, Divider } from 'ant-design-vue';
  // import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { BasicForm, useForm } from '/@/components/Form';
  import AmapDistrictQuery from '/@/components/AmapDistrictQuery/index.vue';
  import FoodsTable from '/@/views/components/foodsTable.vue';
  // import { fffoodsList } from '/@/views/asia/eastAsia/china/data';
  // import { chinaSnacksFoodsData } from '/@/views/snacks/china/data';
  // import { chinaSnacksFoodsData } from '/@/views/snacks/china/data';
  // import { chinaSnacksFoodsData } from '/@/views/snacks/china/data';
  // import { chinaSnacksFoodsData } from '/@/views/snacks/china/data';
  // import { chinaSnacksFoodsData } from '/@/views/snacks/china/data';
  // const { t } = useI18n();
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  const arrayData = ref('');
  // import { cityList } from '/@/common/city';
  import { useMapStore } from '/@/store/modules/map';
  const mapStore = useMapStore();
  import {
    cityFirst,
    citySecond,
    cityThird,
    cityFirstAndSecond,
    cityFirstAndSecondAndThird,
    chinaAreaEastProvinceSouthLine,
    chinaAreaEastProvinceNorthLine,
    chinaAreaWestSouthProvinceSouthLine,
    chinaAreaWestSouthProvinceNorthLine,
  } from '/@/common/chinaEveryAreaData';
  import { formSchemas } from './data';
  import { totalListByCity } from '/@/views/snacks/china/data';
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
    const cityData = ref<any>({
      cityFirst,
      citySecond,
      cityThird,
      cityFirstAndSecond,
      cityFirstAndSecondAndThird,
    });
    list.value.map(async (line, i) => {
      // 华东起点南方路线-城市
      // const chinaAreaEastProvinceCitySouthLine = ref<any[]>([]);
      const objLine = ref<any>({
        line0: ref<string>(names.value[i] + '路线一线城市: \n'),
        line1: ref<string>(names.value[i] + '路线二线城市: \n'),
        line2: ref<string>(names.value[i] + '路线三线城市: \n'),
        line3: ref<string>(names.value[i] + '路线一二线城市: \n'),
        line4: ref<string>(names.value[i] + '路线一二三线城市: \n'),
        line5: ref<string>(names.value[i] + '路线\n'),
        lineLen0: ref(0),
        lineLen1: ref(0),
        lineLen2: ref(0),
        lineLen3: ref(0),
        lineLen4: ref(0),
        lineLen5: ref(0),
      });

      await line?.map((name) => {
        mapStore.districtDataMain.filter((item) => {
          if (item.name.includes(name)) {
            const cityNameList = item.districts.map((cl) => cl.name) || [];
            // objLine.value['line5'] += name + ': (' + cityNameList?.join(',') + ')\n';
            // objLine.value['lineLen5'] += objLine.value['line5'].length;
            Object.keys(cityData.value).forEach((key, j) => {
              // console.log(cityData.value[key], key, j);
              let cityListFilter = cityData.value[key].filter((x) => cityNameList?.includes(x));
              objLine.value['line' + j] +=
                name +
                (item.districts?.length > 1 && cityListFilter.length > 0
                  ? '(' + cityListFilter?.join(',') + ')'
                  : '') +
                '->\n';
              objLine.value['lineLen' + j] += cityListFilter.length;
            });
          }
        });
      });
      console.log(objLine.value['lineLen0']);
      console.log(objLine.value['line0'], '\n\n\n');
      console.log(objLine.value['lineLen1']);
      console.log(objLine.value['line1'], '\n\n\n');
      console.log(objLine.value['lineLen2']);
      console.log(objLine.value['line2'], '\n\n\n');
      console.log(objLine.value['lineLen3']);
      console.log(objLine.value['line3'], '\n\n\n');
      console.log(objLine.value['lineLen4']);
      console.log(objLine.value['line4'], '\n\n\n');
      // console.log(objLine.value['lineLen5']);
      // console.log(objLine.value['line5'], '\n\n\n');
      // console.log(lineLen.value);
      // console.log(line0.value, '\n\n\n');

      return Promise.resolve();
    });
  };
  const sortCookByCity = async () => {
    // const foodsList = ref<any[]>([]);
    const cityName = getFieldsValue().cityName;
    if (!cityName) {
      return;
    }
  };
</script>
