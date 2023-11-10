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
  import { ref, Ref, reactive, unref } from 'vue';
  import { List, Card, Button, Space, Input, Form } from 'ant-design-vue';
  // import { lampshadedBeefScriptsList } from './lampshadedBeef';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  // import { useI18n } from '/@/hooks/web/useI18n';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // const { createMessage } = useMessage();
  // const { t } = useI18n();
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  // const CardMeta = Card.Meta;
  // const InputTextArea = Input.TextArea;
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
  // 将字符串分隔符(中文逗号，回车)统一替换成英文分隔符，并转成为数组
  const replaceAndSplitStr = (value: any) => {
    return value.replace(/、/g, ',').replace(/，/g, ',').replace(/\n/g, ',').split(',');
  };
  // 常规数组操作
  const handleArrayRoutines = () => {
    arrayData.value = [];
    const { strBegin } = arrayRoutines;
    const arrBegin = strBegin && replaceAndSplitStr(strBegin);
    const setArrBegin = Array.from(new Set(arrBegin));
    setArrBegin.map((item) => {
      arrayData.value.push({
        province: '广东省', // 省
        city: '梅州市', // 市
        district: '', // 区
        address: '', // 地方名称
        foodAvatar: '', // 美食图片
        foodName: item, // 美食名称
        foodName_en: '', // 美食英文名称
        foodCategoryCode: 'beef', // 食材类别编码
        foodCategoryName: '牛肉', // 食材类别名称
        cuisineCategoryCode: 'cantoneseCuisine',
        cuisineCategoryName: '粤菜',
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
