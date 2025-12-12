<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2025-06-09 17:48:50
 * @FilePath: /cooking-menu/src/views/tools/capitaCalc/index.vue
 * @Description: 人均支出明细计算工具
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper contentFullHeight>
    <BasicForm @register="registerForm" />
    <BasicForm @register="registerFormDetails" />
    <Card hoverable>
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
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  // import { replaceAndSplitStr } from '/@/utils/general';
  import { ref, unref } from 'vue';
  import { Card, Space, Divider } from 'ant-design-vue';
  // import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicForm, useForm } from '/@/components/Form';
  const familyNeedSpend = ref(0); //家庭必须开销
  const familyNotNeedSpend = ref(0); //家庭非必须开销
  const familyTotalSpend = ref(0); //家庭总开销
  const familyDeposit = ref(0); //家庭存款
  const personNeedSpend = ref(0); //个人必须开销
  const personNotNeedSpend = ref(0); //个人非必须开销
  const personTotalSpend = ref(0); //个人总开销
  const personFoodsAmount = ref(''); //家庭月度三餐总开销
  const personFoodsDayAmount = ref(''); //家庭三餐日均开销
  //搜索表单
  const [registerForm, { getFieldsValue, validate }] = useForm({
    schemas: [
      {
        field: 'totalIncome',
        component: 'InputNumber',
        required: true,
        defaultValue: 15000,
        label: '家庭税后总收入(元/月)',
      },
      {
        field: 'totalPerson',
        component: 'InputNumber',
        defaultValue: 2,
        required: true,
        label: '家庭总人数(个)',
      },
      {
        field: 'version',
        component: 'RadioGroup',
        label: '选择版本',
        helpMessage: [
          '基础版：适用场景：收入中等、无大额负债的普通家庭。',
          '保守版：高负债（如房贷）或低收入家庭。',
          '进阶版：适用场景：高收入、低负债家庭，追求快速财富积累。',
        ],
        required: true,
        defaultValue: 1,
        // helpMessage(renderCallbackParams) {
        //   return '2025年版本为基础版本，2026年版本为升级版本';
        // },
        componentProps: {
          options: [
            { label: '基础版(5:3:2法则)', value: 0 },
            { label: '保守版(6:2:2法则)', value: 1 },
            { label: '进阶版(4:3:3法则)', value: 2 },
          ],
        },
      },
      {
        field: 'totalExpend',
        component: 'InputNumber',
        required: true,
        label: '家庭固定支出(元/月)',
        helpMessage: '家庭开销（如房贷、车贷、水电网煤、通讯费、保险、物业费、税费）',
        ifShow: false,
      },
      {
        field: 'monthFoodsRatio',
        component: 'RadioGroup',
        label: '三餐开销占比',
        // itemProps: {
        //   extra: '客户、邀评人默认被分享',
        // },
        helpMessage: [
          '基础版（均衡型）：15%-20% 月收入（含食材+偶尔外食）',
          '压缩版（省钱优先）：10%-12%（需牺牲部分食材多样性）',
          '宽松版（品质优先）：20%-25%（有机食材/高频外食）',
        ],
        required: true,
        defaultValue: '0.1, 0.12',
        componentProps: {
          options: [
            { label: '基础版(均衡型)', value: '0.15, 0.2' },
            { label: '压缩版(省钱优先)', value: '0.1, 0.12' },
            { label: '宽松版(品质优先)', value: '0.2, 0.25' },
          ],
          buttonStyle: 'outline',
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
      { field: 'familyNeedSpend', component: 'Input', label: '家庭必须开销(元/月)' },
      { field: 'familyNotNeedSpend', component: 'Input', label: '家庭非必须开销(元/月)' },
      // { field: 'familyTotalSpend', component: 'Input', label: '家庭总开销(元/月)' },
      { field: 'familyDeposit', component: 'Input', label: '家庭存款(元/月)' },
      { field: 'personNeedSpend', component: 'Input', label: '个人必须开销(元/月)' },
      { field: 'personNotNeedSpend', component: 'Input', label: '个人非必须开销(元/月)' },
      { field: 'personTotalSpend', component: 'Input', label: '个人总开销(元/月)' },
      { field: 'personFoodsAmount', component: 'Input', label: '个人月度三餐总开销(元/月)' },
      { field: 'personFoodsDayAmount', component: 'Input', label: '个人日均三餐总开销(元/日)' },
    ],
    disabled: true,
    labelWidth: 180,
    baseColProps: { span: 6 },
    // showResetButton: false,
    // showSubmitButton: false,
    showActionButtonGroup: false,
  });
  const columns = [
    {
      title: '项目',
      dataIndex: 'project',
      width: 120,
    },
    {
      title: '最优占比(月收入)',
      dataIndex: 'optimalRatio',
      width: 120,
    },
    {
      title: '金额(月)',
      dataIndex: 'amount',
      width: 120,
    },
    {
      title: '平均额度(月)',
      dataIndex: 'avgAmount',
      width: 120,
    },
  ];
  const [registerTableNeed, { setTableData }] = useTable({
    columns: columns,
    useSearchForm: false,
    bordered: true,
    showTableSetting: false,
    size: 'small',
    canResize: false,
    isCanResizeParent: true,
    showIndexColumn: false,
    immediate: false,
    dataSource: [],
    pagination: false,
  });
  const [registerTableNotNeed, { setTableData: setTableDataNotNeed }] = useTable({
    columns: columns,
    useSearchForm: false,
    bordered: true,
    showTableSetting: false,
    size: 'small',
    canResize: false,
    isCanResizeParent: true,
    showIndexColumn: false,
    immediate: false,
    dataSource: [],
    pagination: false,
  });

  //表单提交
  async function handleSubmit() {
    await validate();
    const values = getFieldsValue();
    // console.log('values', values);
    familyNeedSpend.value = values?.totalIncome * [0.5, 0.6, 0.4][values?.version];
    familyNotNeedSpend.value = values?.totalIncome * [0.3, 0.2, 0.3][values?.version];
    familyDeposit.value = values?.totalIncome * 0.2;
    familyTotalSpend.value = Number(familyNeedSpend.value) + Number(familyNotNeedSpend.value);
    personNeedSpend.value = familyNeedSpend.value / values?.totalPerson;
    // (Number(familyNeedSpend.value) / (Number(values?.totalIncome) * values?.totalPerson)) * 100; //占比公式
    personNotNeedSpend.value = familyNotNeedSpend.value / values?.totalPerson;
    // (Number(familyNotNeedSpend.value) / (values?.totalIncome * values?.totalPerson)) * 100; //占比公式
    personTotalSpend.value = familyTotalSpend.value / values?.totalPerson;
    // (familyTotalSpend?.value / (values?.totalIncome * values?.totalPerson)) * 100; //占比公式
    const formatMonthFoodsRatio = values?.monthFoodsRatio
      .split(',')
      .map((item: string) => Number(item)); //格式化
    personFoodsAmount.value =
      (personNeedSpend?.value * formatMonthFoodsRatio[0]).toString() +
      '~' +
      (personNeedSpend.value * formatMonthFoodsRatio[1]).toString();
    personFoodsDayAmount.value = (
      (personNeedSpend?.value * formatMonthFoodsRatio[0] +
        personNeedSpend?.value * formatMonthFoodsRatio[1]) /
      2 /
      30.5
    )
      .toFixed(2)
      .toString();
    // 储蓄占比底线： 储蓄率 = 月储蓄额/月收入*100% ≥ 20 %
    // 人均开销警戒线： 人均总支出 ≤ 家庭收入 × 70 %/家庭人口数
    // 必要开销（50%-60%收入）的细分最优占比
    setFieldsValue({
      familyNeedSpend: familyNeedSpend.value,
      familyNotNeedSpend: familyNotNeedSpend.value,
      familyTotalSpend: familyTotalSpend.value,
      familyDeposit: familyDeposit.value,
      personNeedSpend: personNeedSpend.value,
      personNotNeedSpend: personNotNeedSpend.value,
      personTotalSpend: personTotalSpend.value,
      personFoodsAmount: personFoodsAmount.value,
      personFoodsDayAmount: personFoodsDayAmount.value,
    });
    const tabledataNeed = ref<any>([]);
    //       高负债家庭：住房占比≤35%，压缩其他项目（如饮食降至10%）。
    // 低消费地区：住房占比可降至15%，增加医疗或教育支出。
    // 必要开销（50%-60%收入）的细分最优占比
    const projectList = [
      '住房用车（房租/房贷/车贷）',
      '饮食（含买菜、水果/外卖）',
      '交通（通勤/油费/停车费）',
      '医疗/保险',
      '水电网媒/通讯/物业费',
      '其他必要支出（日用品/教育等）',
    ];
    const optimalList = ['≤25%', '10%-15%', '5%-8%', '3%-5%', '3%-5%', '5%-10%'];
    const optimalRatioList = [
      0.25,
      [0.1, 0.15],
      [0.05, 0.08],
      [0.03, 0.05],
      [0.03, 0.05],
      [0.05, 0.1],
    ];
    const optimalAvgRatioList = [0.25, 0.125, 0.065, 0.04, 0.04, 0.075];
    tabledataNeed.value = await handleTable(
      projectList,
      optimalList,
      optimalRatioList,
      optimalAvgRatioList,
    );

    setTableData(tabledataNeed.value);
    //     项目	最优占比（月收入）	说明（以月入1万元为例）
    // 娱乐（流媒体/游戏）	3%-5%	300-500元
    // 旅游	5%-10%	500-1000元（可按年预算分摊）
    // 购物（服饰/电子产品）	5%-8%	500-800元
    // 社交聚会	3%-5%	300-500元
    // 其他兴趣消费（健身/课程）	3%-5%	300-500元
    const tabledataNotNeed = ref<any>([]);
    const projectNotNeedList = [
      '娱乐（流媒体/游戏）',
      '旅游（景点/住宿/交通/饮食/伴手礼）',
      '购物（服饰/电子产品/美妆护肤等）',
      '社交聚会（聚餐/聚会/送礼）',
      '其他兴趣消费（健身/课程）',
    ];
    const optimalNotNeedList = ['3%-5%', '5%-10%', '5%-8%', '3%-5%', '3%-5%'];
    const optimalRatioNotNeedList = [
      [0.03, 0.05],
      [0.05, 0.1],
      [0.05, 0.08],
      [0.03, 0.05],
      [0.03, 0.05],
    ];
    const optimalAvgRatioNotNeedList = [0.04, 0.075, 0.065, 0.04, 0.04];
    tabledataNotNeed.value = await handleTable(
      projectNotNeedList,
      optimalNotNeedList,
      optimalRatioNotNeedList,
      optimalAvgRatioNotNeedList,
    );
    setTableDataNotNeed(tabledataNotNeed.value);

    //     1. 占收入比例
    // 基础版（均衡型）：
    // 15%-20% 月收入（含食材+偶尔外食）
    // *示例：月入1万元 → 1500-2000元/月*

    // 压缩版（省钱优先）：
    // 10%-12%（需牺牲部分食材多样性）

    // 宽松版（品质优先）：
    // 20%-25%（有机食材/高频外食）

    // 2. 占必要开销比例
    // 建议控制在 30%-40% 必要总支出内（必要支出≈50%收入）。
  }
  const handleTable = async (
    projectList: string[],
    optimalList: string[],
    optimalRatioList: any[],
    optimalAvgRatioList: any[],
  ) => {
    const result = ref<any>([]);
    const values = getFieldsValue();

    for (let i = 0; i < projectList.length; i++) {
      // const amount = ref('');
      // const avgAmount = ref('');
      // switch (i) {
      //   case 0:
      //     amount.value = (familyNeedSpend.value * 0.25).toString();
      //     avgAmount.value = (familyNeedSpend.value * 0.25).toString();
      //     break;
      //   case 1:
      //     amount.value =
      //       (familyNeedSpend.value * 0.1).toString() +
      //       '~' +
      //       (familyNeedSpend.value * 0.15).toString();
      //     avgAmount.value = (familyNeedSpend.value * 0.125).toString();
      //     break;
      //   case 2:
      //     amount.value = (familyNeedSpend.value * 0.05).toString();
      //     '~' + (familyNeedSpend.value * 0.08).toString();
      //     avgAmount.value = (familyNeedSpend.value * 0.065).toString();
      //     break;
      //   case 3:
      //   case 4:
      //     amount.value = (familyNeedSpend.value * 0.03).toString();
      //     '~' + (familyNeedSpend.value * 0.05).toString();
      //     avgAmount.value = (familyNeedSpend.value * 0.04).toString();
      //     break;
      //   case 5:
      //     amount.value = (familyNeedSpend.value * 0.05).toString();
      //     '~' + (familyNeedSpend.value * 0.1).toString();
      //     avgAmount.value = (familyNeedSpend.value * 0.075).toString();
      //     break;
      //   default:
      //     amount.value = '';
      // }
      result.value.push({
        project: projectList[i],
        optimalRatio: optimalList[i],
        amount:
          typeof optimalRatioList[i] === 'number'
            ? (values?.totalIncome * optimalRatioList[i]).toString()
            : (values?.totalIncome * optimalRatioList[i][0]).toString() +
              '~' +
              (values?.totalIncome * optimalRatioList[i][1]).toString(),
        avgAmount: (values?.totalIncome * optimalAvgRatioList[i]).toString(),
      });
    }
    return unref(result);
  };
</script>
<style scoped lang="scss">
  .text-red-600 {
    font-size: large;
    font-weight: 600;
    color: red;
  }
</style>
