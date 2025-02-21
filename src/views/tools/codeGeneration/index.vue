<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-08 16:10:23
 * @FilePath: /cooking-menu/src/views/tools/codeGeneration/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-08 16:10:23
 * @FilePath: /cooking-menu/src/views/tools/codeGeneration/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <Card hoverable>
      <template #title>数据过滤</template>
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <!-- <InputTextArea placeholder="需要发送到服务器的内容" :disabled="!getIsOpen" v-model:value="sendValue" allowClear /> -->
          <!-- <Button @click="startOrdering()"> {{ startOrderingText }} </Button> -->
          <!-- <Divider type="vertical" orientation="left" style="width: 100%">常规数组处理</Divider> -->
          <Form :model="arrayRoutines" ref="arrayRoutinesRef">
            <FormItem name="数组" class="enter-x">
              <!-- <Input v-model:value="arrayRoutines.strBegin" placeholder="请输入" /> -->
            </FormItem>
            <FormItem class="enter-x">
              <Button size="large" block class="mt-4" @click="handleDataFilter"> 数据过滤 </Button>
            </FormItem>
          </Form>
          <List>
            <ListItem>
              <ListItemMeta>
                <template #description>
                  <code ref="codeResult"> </code>
                </template>
              </ListItemMeta>
            </ListItem>
          </List>
        </Space>
      </template>
    </Card>
    <Card hoverable>
      <template #title>代码生成</template>
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <!-- <InputTextArea placeholder="需要发送到服务器的内容" :disabled="!getIsOpen" v-model:value="sendValue" allowClear /> -->
          <!-- <Button @click="startOrdering()"> {{ startOrderingText }} </Button> -->
          <!-- <Divider type="vertical" orientation="left" style="width: 100%">常规数组处理</Divider> -->
          <Form :model="arrayRoutines" ref="arrayRoutinesRef">
            <FormItem name="数组" class="enter-x">
              <Input v-model:value="arrayRoutines.strBegin" placeholder="请输入" />
            </FormItem>
            <FormItem class="enter-x">
              <Button size="large" block class="mt-4" @click="handleArrayRoutines">
                代码生成
              </Button>
            </FormItem>
          </Form>
          <List>
            <ListItem>
              <ListItemMeta>
                <template #description>
                  <code ref="codeResult">
                    {{ arrayData }}
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
  import { PageWrapper } from '/@/components/Page';
  import { replaceAndSplitStr } from '/@/utils/general';
  import { ref, Ref, reactive, unref } from 'vue';
  import { List, Card, Button, Space, Input, Form } from 'ant-design-vue';
  // import { lampshadedBeefScriptsList } from './lampshadedBeef';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  // import { useI18n } from '/@/hooks/web/useI18n';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage } = useMessage();
  // import { anhuiSnacksFoodsList } from '/@/views/snacks/china/mockData/anhui';
  // import { aomenSnacksFoodsList } from '/@/views/snacks/china/mockData/aomen';
  // import { beijingSnacksFoodsList } from '/@/views/snacks/china/mockData/beijing';
  // import { chongqingSnacksFoodsList } from '/@/views/snacks/china/mockData/chongqing';
  import { fuJianSnacksFoodsList } from '../../snacks/china/mockData/fuJian';
  // import { gansuSnacksFoodsList } from '/@/views/snacks/china/mockData/gansu';
  // import { guangdongSnacksFoodsList } from '/@/views/snacks/china/mockData/guangdong';
  // import { guangxiSnacksFoodsList } from '/@/views/snacks/china/mockData/guangxi';
  // import { guizhouSnacksFoodsList } from '/@/views/snacks/china/mockData/guizhou';
  // import { hainanSnacksFoodsList } from '/@/views/snacks/china/mockData/hainan';
  // import { hebeiSnacksFoodsList } from '/@/views/snacks/china/mockData/hebei';
  // import { heilongjiangSnacksFoodsList } from '/@/views/snacks/china/mockData/heilongjiang';
  // import { henanSnacksFoodsList } from '/@/views/snacks/china/mockData/henan';
  // import { hubeiSnacksFoodsList } from '/@/views/snacks/china/mockData/hubei';
  // import { hunanSnacksFoodsList } from '/@/views/snacks/china/mockData/hunan';
  // import { innerMongoliaSnacksFoodsList } from '/@/views/snacks/china/mockData/innerMongolia';
  // import { jiangshuSnacksFoodsList } from '/@/views/snacks/china/mockData/jiangshu';
  // import { shandongSnacksFoodsList } from '/@/views/snacks/china/mockData/shandong';
  // import { shanghaiSnacksFoodsList } from '/@/views/snacks/china/mockData/shanghai';
  // import { sichuanSnacksFoodsList } from '/@/views/snacks/china/mockData/sichuan';
  // import { taiwanSnacksFoodsList } from '/@/views/snacks/china/mockData/taiwan';
  // import { shanxiSnacksFoodsList } from '/@/views/snacks/china/mockData/shanxi';
  // import { tianjinSnacksFoodsList } from '/@/views/snacks/china/mockData/tianjin';
  // import { shannxiSnacksFoodsList } from '/@/views/snacks/china/mockData/shannxi';
  // import { hongKongSnacksFoodsList } from '/@/views/snacks/china/mockData/hongKong';
  // import { xinjiangSnacksFoodsList } from '/@/views/snacks/china/mockData/xinjiang';
  // import { yunnanSnacksFoodsList } from '/@/views/snacks/china/mockData/yunnan';
  // import { zhejiangSnacksFoodsList } from '/@/views/snacks/china/mockData/zhejiang';
  // import { othersSnacksFoodsList } from '/@/views/snacks/china/mockData/others';
  // import { chinaSnacksSnacksFoodsList } from '/@/views/snacks/china/data';
  // import { huNanSnacksFoodsList } from '/@/views/asia/eastAsia/china/mockData/hunanProvince';
  // import { fffoodsList } from '/@/views/asia/eastAsia/china/data';

  // const { t } = useI18n();
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  // const CardMeta = Card.Meta;
  // const InputTextArea = Input.TextArea;
  // const reg = /^[省市].+(?:厅|局|办|办公室|委|委员会)$/;
  // [\u4e00-\u9fa5]{0,100}
  // .*[饼]
  const reg = /^[\u4e00-\u9fa5]{0,100}.+(?:包|包子)$/;
  const reg1 = /^[\u4e00-\u9fa5]{0,100}.+(?:饼)$/;
  const reg2 = /^[\u4e00-\u9fa5]{0,100}.+(?:粥)$/;
  const reg3 = /^[\u4e00-\u9fa5]{0,100}.+(?:饭)$/;
  const reg4 = /^[\u4e00-\u9fa5]{0,100}.+(?:粄)$/;
  const reg5 = /^[\u4e00-\u9fa5]{0,100}.+(?:锅巴|锅奎|锅盔)$/;
  const reg6 = /^[\u4e00-\u9fa5]{0,100}.+(?:粉)$/;
  const reg7 = /^[\u4e00-\u9fa5]{0,100}.+(?:面)$/;
  const reg8 = /^[\u4e00-\u9fa5]{0,100}.+(?:粑)$/;
  const reg9 = /^[\u4e00-\u9fa5]{0,100}.+(?:馍)$/;
  const reg0 = /^[\u4e00-\u9fa5]{0,100}.+(?:糕|糕点)$/;
  const reg42 = /^[\u4e00-\u9fa5]{0,100}.+(?:烧麦|烧卖|稍美)$/;
  const reg43 = /^[\u4e00-\u9fa5]{0,100}.+(?:饺|饺子|贴)$/;
  const reg44 = /^[\u4e00-\u9fa5]{0,100}.+(?:粽子|粽)$/;
  const reg45 = /^[\u4e00-\u9fa5]{0,100}.+(?:酥)$/;
  const reg46 = /^[\u4e00-\u9fa5]{0,100}.+(?:糖)$/;
  const reg47 = /^[\u4e00-\u9fa5]{0,100}.+(?:汤)$/;
  const reg48 = /^[\u4e00-\u9fa5]{0,100}.+(?:茶)$/;
  const reg49 = /^[\u4e00-\u9fa5]{0,100}.+(?:丸|丸子)$/;
  const reg99 =
    /^[\u4e00-\u9fa5]{0,100}.+(?:包|包子|饼|粥|饭|粄|锅巴|锅奎|锅盔|粉|面|粑|馍|糕|糕点|烧麦|饺|饺子|粽子|粽|酥|糖|汤|茶|丸|丸子|贴)$/;
  // const reg100 =
  //   /^[\u4e00-\u9fa5]{0,100}.+(?:芋头|芋|元宵|米皮|面皮|粉皮|凉皮|凉面|炸鸡|糟|豆干|豆腐干|香干|圆子|茶干|鸭蛋|皮蛋|鸡蛋|臭豆腐|春卷|瓜子|瓜|牛肉干|羊肉干|粉干|面筋|卤蛋|团|汤圆|圆子|糊|菜盒|米线|饵块|板栗|饸饹|饯|果脯|枣)$/;

  // 数据过滤
  const handleDataFilter = () => {
    // function arrGroup(arr, fn) {
    //   const obj = {};
    //   arr.forEach((item) => {
    //     const key = JSON.stringify(fn(item));
    //     obj[key] = obj[key] || [];
    //     obj[key].push(item);
    //   });
    //   return Object.keys(obj).map((k) => {
    //     return obj[k];
    //   });
    // }

    const dataList = fuJianSnacksFoodsList;
    const data = dataList.filter((item) => reg.test(item['foodName']));
    const data1 = dataList.filter((item) => reg1.test(item['foodName']));
    const data2 = dataList.filter((item) => reg2.test(item['foodName']));
    const data3 = dataList.filter((item) => reg3.test(item['foodName']));
    const data4 = dataList.filter((item) => reg4.test(item['foodName']));
    const data5 = dataList.filter((item) => reg5.test(item['foodName']));
    const data6 = dataList.filter((item) => reg6.test(item['foodName']));
    const data7 = dataList.filter((item) => reg7.test(item['foodName']));
    const data8 = dataList.filter((item) => reg8.test(item['foodName']));
    const data9 = dataList.filter((item) => reg9.test(item['foodName']));
    const data11 = dataList.filter((item) => reg0.test(item['foodName']));
    const data12 = dataList.filter((item) => reg42.test(item['foodName']));
    const data13 = dataList.filter((item) => reg43.test(item['foodName']));
    const data14 = dataList.filter((item) => reg44.test(item['foodName']));
    const data15 = dataList.filter((item) => reg45.test(item['foodName']));
    const data16 = dataList.filter((item) => reg46.test(item['foodName']));
    const data17 = dataList.filter((item) => reg47.test(item['foodName']));
    const data18 = dataList.filter((item) => reg48.test(item['foodName']));
    const data19 = dataList.filter((item) => reg49.test(item['foodName']));
    const data20 = dataList.filter((item) => !reg99.test(item['foodName']));
    // const data100 = dataList.filter((item) => reg100.test(item['foodName']));
    // const newArr = arrGroup(data100, (item) => item.cuisineCategoryCode);
    console.log('--------------包|包子:', data);
    console.log('--------------饼:', data1);
    console.log('--------------粥:', data2);
    console.log('--------------饭:', data3);
    console.log('--------------粄:', data4);
    console.log('--------------锅巴|锅奎|锅盔:', data5);
    console.log('--------------粉:', data6);
    console.log('--------------面:', data7);
    console.log('--------------粑:', data8);
    console.log('--------------馍:', data9);
    console.log('--------------烧麦:', data12);
    console.log('--------------饺|饺子:', data13);
    console.log('--------------粽子|粽:', data14);
    console.log('--------------糕:', data11);
    console.log('--------------酥:', data15);
    console.log('--------------糖:', data16);
    console.log('--------------汤:', data17);
    console.log('--------------茶:', data18);
    console.log('--------------丸子:', data19);
    console.log('--------------最后剩下:', data20);
    // console.log('数据过滤:', dataList.length, data100.length, newArr);
    // useCopyToClipboard(JSON.stringify(unref(arrayData)));
  };
  const arrayRoutinesRef = ref();
  const codeResult = ref();
  const arrayRoutines = reactive({
    strBegin: '',
  });
  // interface arrayDataParams {
  //   title: string;
  //   text: string;
  // }
  const arrayData: Ref<any> = ref([]);
  const codeResultStr = ref('');

  // const arrayData = ref<T>([]);
  // 代码生成
  const handleArrayRoutines = () => {
    arrayData.value = [];
    const { strBegin } = arrayRoutines;
    const arrBegin = strBegin && replaceAndSplitStr(strBegin);
    const setArrBegin = Array.from(new Set(arrBegin));
    setArrBegin.map((item) => {
      arrayData.value.push({
        province: '未知',
        city: '未知', // 市
        district: '', // 区
        address: '', // 地方名称
        foodAvatar: '', // 美食图片
        foodName: item, // 美食名称
        foodName_en: '', // 美食英文名称
        foodCategoryCode: 'beef', // 食材类别编码
        foodCategoryName: '牛肉', // 食材类别名称
        cuisineCategoryCode: '',
        cuisineCategoryName: '',
        tasteCode: 'spicy', // 口味编码
        tasteName: '麻辣', // 口味名称
        menuCategoryCode: '', // 菜品分类编码
        menuCategoryName: '', // 菜品分类名称，比如：早餐，米，面，饼，菜肴，酱，酒，醋等
        cookingTypeCode: 'multiple', // 烹饪类型编码
        cookingTypeName: '腌、晾、烘、蒸、炸、炒', // 烹饪类型名称
        featuresName: '薄如纸，色红亮，味麻辣鲜脆', // 特色、特点
        // 美食详情
        detail: {
          introduction: '', // 简介
          storyBackground: '', // 故事背景
          ingredients: '', // 原料
          // 制作过程
          productionProcess: [
            {
              stepDesc: '', // 步骤描述
            },
          ],
          // 营养价值
          nutritionalValue: [
            {
              stepDesc: '', // 步骤描述
            },
          ],
          // 食用功效
          edibleEffects: [
            {
              stepDesc: '', // 步骤描述
            },
          ],
          // 做法
          practiceList: [
            {
              way: '1', // 步骤名称
              practiceDesc: '1', // 做法详情介绍
            },
          ],
        },
        shootingStatus: 0, // 拍摄状态
        scripts: 'lampshadedBeefScriptsList',
        remark: '', // 备注
        tags: null, // 标签
        recommendStoreName: '',
        recommendStoreAddress: '',
        isGoTo: 0,
        isCookFlag: 0, // 是否已完成烹饪标记，0是否，1是完成
      });
    });
    // codeResultStr.value = arrayData.value.join();
    useCopyToClipboard(JSON.stringify(unref(arrayData)));
    console.log(
      'changdu:',
      arrBegin.length,
      setArrBegin.length,
      arrayData.value,
      codeResultStr.value,
    );
  };
</script>
../../snacks/china/mockData/fuJian
