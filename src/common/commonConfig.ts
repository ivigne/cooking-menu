import { computed, ref } from 'vue';
import { CustomColumns, CustomVxeFormItemProps } from '/@/components/VxeTable';
// import { BasicColumn, FormSchema } from '/@/components/Table';
// import { values } from 'xe-utils';
// 食材类别-集合
// 鱼、虾、蟹、贝、蛙、猪、牛、羊、鸡、鸭、鸽、米、面、酱、其他、
// const str = '';
// const enstr = '';
// const strarr = str.split('、');
// const enstrarr = enstr.split(',');
// const arr = [];
// strarr.map((i, j) => {
//   arr.push({
//     label: i,
//     value: enstrarr[j],
//   });
// });
// console.log('commonConfigcommonConfigcommonConfig', arr);
// import objectFlag from '/@/views/components/foodsTable.vue';
export const objectFlag = ref(false);

export const foodCategoryList = [
  {
    label: '鱼',
    value: 'fish',
  },
  {
    label: '虾',
    value: 'shrimp',
  },
  {
    label: '蟹',
    value: 'crab',
  },
  {
    label: '贝',
    value: 'shellfish',
  },
  {
    label: '蛙',
    value: 'frog',
  },
  {
    label: '猪',
    value: 'pig',
  },
  {
    label: '牛',
    value: 'beef',
  },
  {
    label: '羊',
    value: 'sheep',
  },
  {
    label: '鸡',
    value: 'chicken',
  },
  {
    label: '鸭',
    value: 'duck',
  },
  {
    label: '鸽',
    value: 'pigeon',
  },
  {
    label: '米',
    value: 'rice',
  },
  {
    label: '面',
    value: 'noodles',
  },
  {
    label: '酱',
    value: 'sauce',
  },
  {
    label: '蔬菜',
    value: 'vegetables',
  },
  {
    label: '其他',
    value: 'others',
  },
];

// 菜系-集合
// 全球十大菜系（法国菜、意大利、印度、泰国、墨西哥、西班牙、黎巴嫩、希腊、中国、日本）
export const cuisineCategoryList = [
  {
    label: '中国',
    value: 'china',
    children: [
      {
        label: '鲁菜',
        value: 'shandongCuisine',
      },
      {
        label: '粤菜',
        value: 'cantoneseCuisine',
      },
      {
        label: '川菜',
        value: 'sichuanCuisine',
      },
      {
        label: '苏菜',
        value: 'jiangsuCuisine',
      },
      {
        label: '浙菜',
        value: 'zhejiangCuisine',
      },
      {
        label: '闽菜',
        value: 'fujianCuisine',
      },
      {
        label: '湘菜',
        value: 'hunanCuisine',
      },
      {
        label: '徽菜',
        value: 'anhuiCuisine',
      },
      {
        label: '京菜',
        value: 'beijingCuisine',
      },
      {
        label: '鄂菜',
        value: 'hubeiCuisine',
      },
      {
        label: '西北菜',
        value: 'northwesternCuisine',
      },
      {
        label: '桂菜',
        value: 'guiCuisine',
      },
      {
        label: '黔菜',
        value: 'qianCuisine',
      },
      {
        label: '冀菜',
        value: 'hebeiCuisine',
      },
      {
        label: '龙江菜',
        value: 'longjiangCuisine',
      },
      {
        label: '豫菜',
        value: 'henanCuisine',
      },
      {
        label: '赣菜',
        value: 'jiangxiCuisine',
      },
      {
        label: '吉林菜',
        value: 'jilinCuisine',
      },
      {
        label: '辽宁菜',
        value: 'liaoningCuisine',
      },
      {
        label: '陕西菜',
        value: 'shaanxiCuisine',
      },
      {
        label: '晋菜',
        value: 'jinCuisine',
      },
      {
        label: '上海菜',
        value: 'shanghaiCuisine',
      },
      {
        label: '天津菜',
        value: 'tianjinCuisine',
      },
      {
        label: '新疆菜',
        value: 'xinjiangCuisine',
      },
      {
        label: '滇菜',
        value: 'yunnanCuisine',
      },
      {
        label: '琼菜',
        value: 'qiongCuisine',
      },
    ],
  },
];
// 口味-集合
// 味型	核心风味	关键原料
// 麻辣	麻 + 辣	辣椒 + 花椒
// 香辣	香 > 辣	辣椒 + 多种香料
// 酸辣	酸 + 辣	辣椒 + 醋/泡菜
// 鲜辣	鲜 + 辣	新鲜辣椒
// 糊辣	焦香 + 辣	炸至棕红的辣椒/花椒
// 糟辣	发酵酸 + 辣	糟辣椒（贵州）
// 炝辣	热油焦香 + 辣	热油 + 辣椒面
export const tasteList = [
  {
    label: '酸甜',
    value: 'sweetSour',
  },
  {
    label: '浓油赤酱',
    value: 'thickOilSauce',
  },
  {
    label: '咸鲜',
    value: 'salty',
  },
  {
    label: '咸甜',
    value: 'savory',
  },
  {
    label: '鲜甜',
    value: 'saltySweet',
  },
  {
    label: '麻辣',
    value: 'freshSweet',
  },
  {
    label: '酸辣',
    value: 'spicy',
  },
  {
    label: '甜辣',
    value: 'sourSpicy',
  },
  {
    label: '香辣',
    value: 'sweetSpicy',
  },
  {
    label: '椒麻',
    value: 'tangySpicy',
  },
  {
    label: '微苦',
    value: 'peppery',
  },
  {
    label: '酱香',
    value: 'slightlyBitter',
  },
];
// 烹饪类型-集合
// 炒、爆、熘、炸、烹、煎、贴、烧、焖、炖、蒸、汆、煮、烩、炝、拌、腌、烤、烘、卤、熏、风、焗、卷、滑、煨、烫、涮、滚、羮、酱、泡、拼、冻、扣、醉、糟、酥、甜、拔丝、蜜汁、沾糖
export const cookingTypeList = [
  {
    label: '炒',
    value: 'stirFry',
  },
  {
    label: '爆',
    value: 'stirFryPop',
  },
  {
    label: '熘',
    value: 'stirFrying',
  },
  {
    label: '炸',
    value: 'deepFry',
  },
  {
    label: '烹',
    value: 'cook',
  },
  {
    label: '煎',
    value: 'panFry',
  },
  {
    label: '贴',
    value: 'stick',
  },
  {
    label: '烧',
    value: 'broil',
  },
  {
    label: '焖',
    value: 'stew',
  },
  {
    label: '炖',
    value: 'braise',
  },
  {
    label: '蒸',
    value: 'steam',
  },
  {
    label: '汆',
    value: 'boil',
  },
  {
    label: '煮',
    value: 'boil',
  },
  {
    label: '烩',
    value: 'chowder',
  },
  {
    label: '炝',
    value: 'stirFry',
  },
  {
    label: '拌',
    value: 'mix',
  },
  {
    label: '腌',
    value: 'pickle',
  },
  {
    label: '烤',
    value: 'grill',
  },
  {
    label: '烘',
    value: 'bake',
  },
  {
    label: '卤',
    value: 'brine',
  },
  {
    label: '熏',
    value: 'smoke',
  },
  {
    label: '风',
    value: 'wind',
  },
  {
    label: '焗',
    value: 'bake',
  },
  {
    label: '卷',
    value: 'roll',
  },
  {
    label: '滑',
    value: 'slide',
  },
  {
    label: '煨',
    value: 'simmer',
  },
  {
    label: '烫',
    value: 'scald',
  },
  {
    label: '涮',
    value: 'shabu',
  },
  {
    label: '滚',
    value: 'roll',
  },
  {
    label: '羮',
    value: 'glutinousDrink',
  },
  {
    label: '酱',
    value: 'sauce',
  },
  {
    label: '泡',
    value: 'bubbles',
  },
  {
    label: '拼',
    value: 'spices',
  },
  {
    label: '冻',
    value: 'jelly',
  },
  {
    label: '扣',
    value: 'buckle',
  },
  {
    label: '醉',
    value: 'drunkenness',
  },
  {
    label: '糟',
    value: 'bad',
  },
  {
    label: '酥',
    value: 'crispy',
  },
  {
    label: '甜',
    value: 'sweet',
  },
  {
    label: '拔丝',
    value: 'pulling',
  },
  {
    label: '蜜汁',
    value: 'honeySauce',
  },
  {
    label: '沾糖',
    value: 'dippingSugar',
  },
];
// 省下拉项
export const provinceOptions = [
  {
    label: '安徽省（皖）',
    value: 'anHui',
  },
  {
    label: '澳门特别行政区（澳）',
    value: 'aoMen',
  },
  {
    label: '北京市（京）',
    value: 'beiJing',
  },
  {
    label: '重庆市（渝或巴）',
    value: 'chongQing',
  },
  {
    label: '福建省（闽）',
    value: 'fuJian',
  },
  {
    label: '甘肃省（甘或陇）',
    value: 'ganSu',
  },
  {
    label: '广东省（粤）',
    value: 'guangDong',
  },
  {
    label: '广西壮族自治区（桂）',
    value: 'guangXi',
  },
  {
    label: '贵州省（贵或黔）',
    value: 'guiZhou',
  },
  {
    label: '海南省（琼）',
    value: 'haiNan',
  },
  {
    label: '河北省（冀）',
    value: 'heBei',
  },
  {
    label: '黑龙江省（黑）',
    value: 'heiLongJiang',
  },
  {
    label: '河南省（豫）',
    value: 'heNan',
  },
  {
    label: '香港特别行政区（港）',
    value: 'hongKong',
  },
  {
    label: '湖北省（鄂）',
    value: 'huBei',
  },
  {
    label: '湖南省（湘）',
    value: 'huNan',
  },
  {
    label: '内蒙古自治区（内蒙古）',
    value: 'innerMongolia',
  },
  {
    label: '江苏省（苏）',
    value: 'jiangSu',
  },
  {
    label: '江西省（赣）',
    value: 'jiangXi',
  },
  {
    label: '吉林省（吉）',
    value: 'jiLin',
  },
  {
    label: '辽宁省（辽）',
    value: 'liaoNing',
  },
  {
    label: '宁夏回族自治区（宁）',
    value: 'ningXia',
  },
  {
    label: '青海省（青）',
    value: 'qingHai',
  },
  {
    label: '陕西省（陕或秦）',
    value: 'shaanXi',
  },
  {
    label: '山东省（鲁）',
    value: 'shangDong',
  },
  {
    label: '上海市（沪）',
    value: 'shangHai',
  },
  {
    label: '山西省（晋）',
    value: 'shanXi',
  },
  {
    label: '四川省（川或蜀）',
    value: 'siChuan',
  },
  {
    label: '台湾省（台）',
    value: 'taiWan',
  },
  {
    label: '天津市（津）',
    value: 'tianJin',
  },
  {
    label: '西藏自治区（藏）',
    value: 'tibet',
  },
  {
    label: '新疆维吾尔自治区（新）',
    value: 'xinJiang',
  },
  {
    label: '云南省（云或滇）',
    value: 'yunNan',
  },
  {
    label: '浙江省（浙）',
    value: 'zheJiang',
  },
  {
    label: '未知地方',
    value: 'unkown',
  },
];

export const tableColumnsConfigVxe: CustomColumns = [
  {
    title: '美食名称',
    field: 'foodName',
    width: 120,
    fixed: 'left',
  },
  {
    title: '美食英文名称',
    field: 'foodName_en',
    width: 100,
  },
  {
    title: '美食图片',
    field: 'foodAvatar',
    width: 100,
  },
  {
    title: '省',
    field: 'province',
    width: 80,
  },
  {
    title: '市',
    field: 'city',
    width: 80,
  },
  {
    title: '区',
    field: 'district',
    width: 80,
  },
  {
    title: '地方名称',
    field: 'address',
    width: 80,
  },
  {
    title: '食材类别',
    field: 'foodCategoryName',
    width: 80,
  },
  {
    title: '所属菜系',
    field: 'cuisineCategoryName',
    width: 100,
  },
  {
    title: '口味名称',
    field: 'tasteName',
    width: 100,
  },
  {
    title: '烹饪类型',
    field: 'cookingTypeName',
    width: 100,
  },
  {
    title: '特色/特点',
    field: 'featuresName',
    width: 100,
  },
  {
    title: '标签',
    field: 'tags',
    width: 120,
  },
  {
    title: '备注',
    field: 'remark',
  },
];
export const formConfigVxe: CustomVxeFormItemProps[] = [
  {
    field: 'objectFlag',
    title: '数据来源类型',
    itemRender: {
      name: 'AInput',
    },
    visible: false,
    span: 6,
  },
  {
    field: 'province',
    title: '省/市/自治州',
    itemRender: {
      // name: 'AApiSelect',
      name: 'ASelect',
      // defaultValue: 'jiangSu',
      // defaultValue: ({ item }) => {
      //   // console.log('gbuho', objectFlag.value);
      //   return (item.resetValue = objectFlag.value
      //     ? {
      //         label: '江苏省（苏）',
      //         value: 'jiangSu',
      //       }
      //     : '');
      // },
      defaultValue: computed(() =>
        objectFlag.value
          ? {
              label: '江苏省（苏）',
              value: 'jiangSu',
            }
          : null,
      ),
      props: {
        options: computed(() => provinceOptions),
        optionFilterProp: 'label',
        labelInValue: true,
      },
    },
    // rules: [
    //   {
    //     required: true,
    //     content: '请选择',
    //   },
    // ],
    span: 6,
  },
  {
    field: 'foodName',
    title: '美食名称',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'AInput',
    },
    span: 6,
  },
  {
    field: 'isCookFlag',
    title: '是否做过',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'ASelect',
      defaultValue: 0,
      props: {
        options: [
          {
            label: '是',
            value: 1,
          },
          {
            label: '否',
            value: 0,
          },
        ],
        filterOption: true,
      },
    },
    rules: [
      {
        required: true,
        content: '请选择',
      },
    ],
    span: 6,
  },

  {
    field: 'foodCategoryCode',
    title: '食材类别',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'ASelect',
      props: {
        options: foodCategoryList,
        optionFilterProp: 'label',
      },
    },
    span: 6,
  },
  {
    field: 'cookingTypeCode',
    title: '烹饪类型',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'ASelect',
      props: {
        options: cookingTypeList,
        optionFilterProp: 'label',
      },
    },
    span: 6,
  },
  {
    field: 'cuisineCategoryCode',
    title: '菜系',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'ASelect',
      props: {
        options: cuisineCategoryList,
        optionFilterProp: 'label',
      },
    },
    span: 6,
  },
  {
    field: 'tasteCode',
    title: '口味',
    titleWidth: 120,
    titleAlign: 'right',
    itemRender: {
      name: 'ASelect',
      props: {
        options: tasteList,
        optionFilterProp: 'label',
      },
    },
    span: 6,
  },
  {
    span: 6,
    align: 'right',
    titleAlign: 'right',
    itemRender: {
      name: 'AButtonGroup',
      children: [
        {
          props: { type: 'primary', content: '查询', htmlType: 'submit' },
          attrs: { class: 'mr-2' },
        },
        { props: { type: 'default', htmlType: 'reset', content: '重置' } },
      ],
    },
  },
];
// export const tableColumnsConfig: BasicColumn[] = [
//   {
//     title: '美食名称',
//     dataIndex: 'foodName',
//     width: 120,
//     fixed: 'left',
//   },
//   {
//     title: '美食英文名称',
//     dataIndex: 'foodName_en',
//     width: 100,
//   },
//   {
//     title: '美食图片',
//     dataIndex: 'foodAvatar',
//     width: 100,
//   },
//   {
//     title: '省',
//     dataIndex: 'province',
//     width: 80,
//   },
//   {
//     title: '市',
//     dataIndex: 'city',
//     width: 80,
//   },
//   {
//     title: '区',
//     dataIndex: 'district',
//     width: 80,
//   },
//   {
//     title: '地方名称',
//     dataIndex: 'address',
//     width: 80,
//   },
//   {
//     title: '食材类别',
//     dataIndex: 'foodCategoryName',
//     width: 80,
//   },
//   {
//     title: '所属菜系',
//     dataIndex: 'cuisineCategoryName',
//     width: 100,
//   },
//   {
//     title: '口味名称',
//     dataIndex: 'tasteName',
//     width: 100,
//   },
//   {
//     title: '烹饪类型',
//     dataIndex: 'cookingTypeName',
//     width: 100,
//   },
//   {
//     title: '特色/特点',
//     dataIndex: 'featuresName',
//     width: 100,
//   },
//   {
//     title: '标签',
//     dataIndex: 'tags',
//     width: 120,
//   },
//   {
//     title: '备注',
//     dataIndex: 'remark',
//   },
// ];
// export const formConfig: FormSchema[] = [
//   {
//     field: 'provinceName',
//     label: '省/市/自治州',
//     labelWidth: 120,
//     defaultValue: 'siChuan',
//     component: 'Select',
//     componentProps: {
//       options: provinceOptions,
//       onChange: (val) => {
//         provinceName.value = val;
//       },
//     },
//     colProps: {
//       span: 6,
//     },
//   },
//   {
//     field: 'foodName',
//     label: '美食名称',
//     labelWidth: 120,
//     defaultValue: '',
//     component: 'Input',
//     colProps: {
//       span: 6,
//     },
//   },
//   {
//     field: 'foodCategoryCode',
//     label: '食材类别',
//     labelWidth: 120,
//     component: 'Select',
//     componentProps: {
//       options: foodCategoryList,
//     },
//     colProps: {
//       span: 6,
//     },
//   },
//   {
//     field: 'cookingTypeCode',
//     label: '烹饪类型',
//     labelWidth: 120,
//     component: 'Select',
//     componentProps: {
//       options: cookingTypeList,
//     },
//     colProps: {
//       span: 6,
//     },
//   },
//   {
//     field: 'cuisineCategoryCode',
//     label: '菜系',
//     labelWidth: 120,
//     component: 'Select',
//     componentProps: {
//       options: cuisineCategoryList,
//     },
//     colProps: {
//       span: 6,
//     },
//   },
//   {
//     field: 'tasteCode',
//     label: '口味',
//     labelWidth: 120,
//     component: 'Select',
//     componentProps: {
//       options: tasteList,
//     },
//     colProps: {
//       span: 6,
//     },
//   },
// ];
