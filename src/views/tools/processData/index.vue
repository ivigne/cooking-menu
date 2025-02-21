<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-23 10:23:39
 * @FilePath: /cooking-menu/src/views/tools/processData/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight fixedHeight>
    <Card hoverable>
      <template #title>数组处理</template>
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <!-- <InputTextArea placeholder="需要发送到服务器的内容" :disabled="!getIsOpen" v-model:value="sendValue" allowClear /> -->
          <!-- <Button @click="startOrdering()"> {{ startOrderingText }} </Button> -->
          <Divider type="vertical" orientation="left" style="width: 100%">常规数组处理</Divider>
          <Form :model="arrayRoutines" ref="arrayRoutinesRef">
            <FormItem name="数组" class="enter-x">
              <Input v-model:value="arrayRoutines.strBegin" placeholder="请输入" />
            </FormItem>
            <FormItem class="enter-x">
              <Button size="large" block class="mt-4" @click="handleArrayRoutines('deDuplicate')">
                数组去重
              </Button>
            </FormItem>
          </Form>
          <List>
            <ListItem>
              <ListItemMeta>
                <template #description>
                  {{ arrayRoutinesResult }}
                </template>
              </ListItemMeta>
            </ListItem>
          </List>

          <Divider type="vertical" orientation="left" style="width: 100%"
            >获取两个数组的交集，并集，补集，差集</Divider
          >
          <Form :model="formData" ref="formRef">
            <FormItem name="A数组" class="enter-x">
              <Input v-model:value="formData.strA" placeholder="请输入" />
            </FormItem>
            <FormItem name="B数组" class="enter-x">
              <Input size="large" v-model:value="formData.strB" placeholder="请输入" />
            </FormItem>
            <FormItem class="enter-x">
              <Button size="large" block class="mt-4" @click="handleArray"> 查询 </Button>
            </FormItem>
          </Form>
          <div class="enter-x">
            <List :data-source="arrayData">
              <template #renderItem="{ item }">
                <ListItem>
                  <ListItemMeta>
                    <template #description>
                      {{ item.text }}
                    </template>
                    <template #title> {{ item.title }} </template>
                  </ListItemMeta>
                </ListItem>
              </template>
            </List>
          </div>
        </Space>
      </template>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { replaceAndSplitStr, joinStr } from '/@/utils/general';
  import { ref, Ref, reactive, unref } from 'vue';
  import { List, Card, Button, Space, Input, Form } from 'ant-design-vue';
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
  const arrayRoutines = reactive({
    strBegin: '',
  });
  const arrayRoutinesResult = ref('');
  const formRef = ref();
  const formData = reactive({
    strA: '',
    strB: '',
  });
  // interface arrayDataParams {
  //   title: string;
  //   text: string;
  // }
  const arrayData: Ref<any> = ref([]);

  // const arrayData = ref<T>([]);
  // 常规数组操作
  const handleArrayRoutines = (type: any) => {
    const { strBegin } = arrayRoutines;
    const arrBegin = strBegin && replaceAndSplitStr(strBegin);
    const setArrBegin = Array.from(new Set(arrBegin));
    if (type === 'deDuplicate') {
      arrayRoutinesResult.value = joinStr(setArrBegin);
      useCopyToClipboard(JSON.stringify(unref(setArrBegin)));

      console.log('changdu:', arrBegin.length, setArrBegin.length);
    }
  };
  // 获取两个数组的交集，并集，补集，差集
  const handleArray = () => {
    arrayData.value = [];
    const { strA, strB } = formData;
    const arrA = strA && replaceAndSplitStr(strA);
    const arrB = strB && replaceAndSplitStr(strB);
    const setArrA = new Set(arrA);
    const setArrB = new Set(arrB);
    // 并集
    let unionSet = Array.from(new Set([...arrA, ...arrB]));
    // 交集
    let intersect = arrA.filter((x) => setArrB.has(x));
    // 补集
    let complement = [
      ...arrA.filter((x) => !setArrB.has(x)),
      ...arrB.filter((x) => !setArrA.has(x)),
    ];
    // A数组与B数组的差集
    let minusA = arrA.filter((x) => !setArrB.has(x));
    // B数组与A数组的差集
    let minusB = arrB.filter((x) => !setArrA.has(x));
    const titleArr = ['并集', '交集', '补集', 'A数组与B数组的差集', 'B数组与A数组的差集'];
    const textArr = [unionSet, intersect, complement, minusA, minusB];
    titleArr.map((item, i) => {
      arrayData.value.push({
        title: item,
        text: joinStr(textArr[i]),
      });
    });
  };
  // const handleSubmit = (values: any) => {
  // createMessage.success('click search,values:' + JSON.stringify());
  // };
</script>
