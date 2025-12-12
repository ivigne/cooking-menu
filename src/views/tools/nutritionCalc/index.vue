<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2025-06-09 17:48:50
 * @FilePath: /cooking-menu/src/views/tools/nutritionCalc/index.vue
 * @Description: 人体营养换算
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight>
    <BasicForm @register="registerForm" />
    <BasicForm @register="registerFormDetails" />
    蛋白质为10%～15%，脂类为20%～30%，碳水化合物为55%～65% ≈ 15:25:60 ≈ 3:5:12<br />
    200毫升牛奶或者酸奶中含有6～7克蛋白质，1个鸡蛋中含有6～7克蛋白质，100克的瘦肉或者鱼中含有17～20克蛋白质。你可以每天吃两个鸡蛋+400毫升牛奶+100～150克肉类（包括各种瘦肉、鱼、虾等）。<br />
    对于特殊人群，要用特殊标准。比如说，运动员、孕妇、少年儿童以及营养不良的患者，就需要补充较多的蛋白质，以满足身体所需。而对于肾衰竭的人，则要严格控制蛋白质的质量和数量，以防进一步损害肾功能。当然肝硬化的患者更要注意。<br />
    碳水化合物的平衡：每天至少要吃够150克粮食
    <!-- <Card hoverable>
      <template #title
        >家庭必要开销（50%-60%收入）的细分最优占比。<span class="text-red-600"
          >￥{{ familyNeedSpend }}</span
        ></template
      >
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <Divider type="vertical" orientation="left" style="">
            调整原则【 高负债家庭：住房占比≤35%，压缩其他项目（如饮食降至10%）。
            低消费地区：住房占比可降至15%，增加医疗或教育支出。】
          </Divider>
          <BasicTable @register="registerTableNeed" />
        </Space>
      </template>
    </Card>
    <Card hoverable>
      <template #title
        >家庭非必要开销（30%收入）的细分最优占比。<span class="text-red-600"
          >￥{{ familyNotNeedSpend }}</span
        ></template
      >
      <template #actions>
        <Space direction="vertical" style="width: 100%">
          <Divider type="vertical" orientation="left" style="width: 100%">
            调整原则【 短期目标优先：如存钱买房，可压缩旅游至3%、购物至5%。
            弹性控制：娱乐和社交占比可互换（如减少聚会增加旅行预算）】。
          </Divider>
          <BasicTable @register="registerTableNotNeed" />
        </Space>
      </template>
    </Card> -->
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  // import { replaceAndSplitStr } from '/@/utils/general';
  // import { ref, unref } from 'vue';
  // import { Card, Space, Divider } from 'ant-design-vue';
  // import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  // import { BasicTable, useTable } from '/@/components/Table';
  import { BasicForm, useForm } from '/@/components/Form';
  //搜索表单
  const [registerForm, { getFieldsValue, validate }] = useForm({
    schemas: [
      {
        field: 'weight',
        component: 'InputNumber',
        // required: true,
        defaultValue: 50,
        label: '体重(kg)',
        ifShow: false,
      },
      {
        field: 'height',
        component: 'InputNumber',
        defaultValue: 154,
        required: true,
        label: '身高(cm)',
      },
      {
        field: 'activityType',
        component: 'Select',
        required: true,
        defaultValue: 30,
        label: '活动量类型',
        componentProps: {
          options: [
            {
              label: '活动量(轻体力/千卡)',
              value: 30,
            },
            {
              label: '活动量(中体力/千卡)',
              value: 35,
            },

            {
              label: '活动量(重体力/千卡)',
              value: 40,
            },
            {
              label: '活动量(卧床/轻+胖/千卡)',
              value: 25,
            },
          ],
        },
      },
    ],
    labelWidth: 180,
    // baseColProps: { span: 6 },
    actionColOptions: { span: 4 },
    submitButtonOptions: {
      text: '计算',
    },
    autoSubmitOnEnter: true,
    submitFunc: async () => handleSubmit(),
  });
  // 展示明细
  const [registerFormDetails, { setFieldsValue }] = useForm({
    schemas: [
      {
        field: 'bmrWeight',
        component: 'Input',
        label: '基础代谢公式',
        helpMessage: 'BMR=10x体重(kg)+6.25x身高(cm)-5x年龄(岁)- 161(kg)',
      },
      {
        field: 'standardWeight',
        component: 'Input',
        label: '标准体重(kg)',
        helpMessage: '身高-105，无论男女',
      },
      {
        field: 'lightActivity',
        component: 'Input',
        label: '活动量(轻体力/千卡)',
        helpMessage: '每千克耗能30千卡',
      },
      {
        field: 'mediumActivity',
        component: 'Input',
        label: '活动量(中体力/千卡)',
        helpMessage: '每千克耗能35千卡',
      },
      {
        field: 'heavyActivity',
        component: 'Input',
        label: '活动量(重体力/千卡)',
        helpMessage: '每千克耗能40千卡',
      },
      {
        field: 'bedActivity',
        component: 'Input',
        label: '活动量(卧床/轻+胖/千卡)',
        helpMessage: '每千克耗能25千卡',
      },
      {
        field: 'selfActivity',
        component: 'Input',
        label: '活动量(自身情况)',
        helpMessage: '根据活动量类型选择来运算',
      },
      {
        field: 'carbohydrate',
        component: 'Input',
        label: '所需碳水化合物',
        helpMessage: '碳水化合物为55%，每克碳水化合物产生4千卡能量',
      },
      {
        field: 'protein',
        component: 'Input',
        label: '所需蛋白质',
        helpMessage: '蛋白质为15%,每克蛋白质产生4千卡能量，其中动植物蛋白质应该各占一半',
      },
      {
        field: 'fat',
        component: 'Input',
        label: '所需脂类',
        helpMessage: '脂类为30%，每克脂类产生9千卡能量,其中动植物油各占一半',
      },
      {
        field: 'carbohydrateAmount',
        component: 'Input',
        label: '摄入碳水原料',
        helpMessage:
          '如果是体力劳动者或者比较瘦的人，还有胃肠功能差的人，我会把细粮的比例加大；如果是肥胖者或者运动量很少的人，我会把粗粮的比例加大。',
      },
      {
        field: 'proteinAmount',
        component: 'Input',
        label: '摄入蛋白质原料(肉)',
        helpMessage: [
          '一个中等大小鸡蛋差不多含有6克蛋白质，200毫升牛奶含有6克蛋白质，瘦肉（四条腿或两条腿的动物）以及鱼类基本上含有17%～20%的蛋白质，即每100克肉含有17～20克蛋白质.',
          '实际操作时必须注意，蛋白质的摄入量不能打折扣，鼓励尽量多一些，但不要超过20%。',
        ],
      },
      {
        field: 'fatAmount',
        component: 'Input',
        label: '摄入脂类原料',
        helpMessage:
          '脂类的摄入在保证数量的同时还要注重比例，单不饱和脂肪酸和多不饱和脂肪酸要更多一些，因此鱼、虾和海藻要多吃一些。',
      },
      // { field: '', component: 'Input', label: '' },
    ],
    disabled: true,
    labelWidth: 180,
    baseColProps: { span: 6 },
    showActionButtonGroup: false,
  });
  // const columns = [
  //   {
  //     title: '项目',
  //     dataIndex: 'project',
  //     width: 120,
  //   },
  //   {
  //     title: '最优占比(月收入)',
  //     dataIndex: 'optimalRatio',
  //     width: 120,
  //   },
  //   {
  //     title: '金额(月)',
  //     dataIndex: 'amount',
  //     width: 120,
  //   },
  //   {
  //     title: '平均额度(月)',
  //     dataIndex: 'avgAmount',
  //     width: 120,
  //   },
  // ];
  // const [registerTableNeed, { setTableData }] = useTable({
  //   columns: columns,
  //   useSearchForm: false,
  //   bordered: true,
  //   showTableSetting: false,
  //   size: 'small',
  //   canResize: false,
  //   isCanResizeParent: true,
  //   showIndexColumn: false,
  //   immediate: false,
  //   dataSource: [],
  //   pagination: false,
  // });
  // const [registerTableNotNeed, { setTableData: setTableDataNotNeed }] = useTable({
  //   columns: columns,
  //   useSearchForm: false,
  //   bordered: true,
  //   showTableSetting: false,
  //   size: 'small',
  //   canResize: false,
  //   isCanResizeParent: true,
  //   showIndexColumn: false,
  //   immediate: false,
  //   dataSource: [],
  //   pagination: false,
  // });

  //表单提交
  async function handleSubmit() {
    await validate();
    const values = getFieldsValue();

    console.log(values);
    const standardWeight = values?.height - 105;
    const selfActivity = standardWeight * values?.activityType;
    const carbohydrate = (selfActivity * 0.55) / 4;
    const protein = (selfActivity * 0.15) / 4;
    const fat = (selfActivity * 0.3) / 9;
    setFieldsValue({
      standardWeight,
      lightActivity: standardWeight * 30,
      mediumActivity: standardWeight * 35,
      heavyActivity: standardWeight * 40,
      bedActivity: standardWeight * 25,
      selfActivity,
      carbohydrate,
      protein,
      fat,
      carbohydrateAmount: carbohydrate,
      proteinAmount: protein / 0.2,
      fatAmount: fat,
    });
  }
</script>
<style scoped lang="scss">
  .text-red-600 {
    font-size: large;
    font-weight: 600;
    color: red;
  }
</style>
