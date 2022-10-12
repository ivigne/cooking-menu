/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-12 20:07:49
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn, FormProps } from '/@/components/Table';
// 食材类别-集合
const foodCategoryList = [
  {
    label: '牛肉',
    value: 'beef',
  },
];
// 菜系-集合
const cuisineCategoryList = [
  {
    label: '川菜',
    value: 'sichuanCuisine',
  },
];
// 口味-集合
const tasteList = [
  {
    label: '麻辣',
    value: 'spicy',
  },
];
// 烹饪类型-集合
const cookingTypeList = [
  {
    label: '腌、晾、烘、蒸、炸、炒',
    value: 'multiple',
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
];

export const tableColumnsConfig: BasicColumn[] = [
  {
    title: '省',
    dataIndex: 'province',
  },
  {
    title: '市',
    dataIndex: 'city',
  },
  {
    title: '区',
    dataIndex: 'district',
  },
  {
    title: '地方名称',
    dataIndex: 'address',
  },
  {
    title: '美食图片',
    dataIndex: 'foodAvatar',
  },
  {
    title: '美食名称',
    dataIndex: 'foodName',
  },
  {
    title: '美食英文名称',
    dataIndex: 'foodName_en',
  },
  {
    title: '食材类别名称',
    dataIndex: 'foodCategoryName',
  },
  {
    title: '所属菜系',
    dataIndex: 'cuisineCategoryName',
  },
  {
    title: '口味名称',
    dataIndex: 'tasteName',
  },
  {
    title: '烹饪类型名称',
    dataIndex: 'cookingTypeName',
  },
  {
    title: '特色/特点',
    dataIndex: 'featuresName',
  },
  {
    title: '标签',
    dataIndex: 'tags',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const formConfig: Partial<FormProps> = {
  schemas: [
    {
      field: 'provinceCode',
      label: '省/市/自治州:',
      labelWidth: 120,
      defaultValue: 'siChuan',
      component: 'Select',
      componentProps: {
        options: provinceOptions,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'foodName',
      label: '美食名称:',
      labelWidth: 120,
      defaultValue: '',
      component: 'Input',
      colProps: {
        span: 6,
      },
    },
    {
      field: 'foodCategoryCode',
      label: '食材类别：',
      labelWidth: 120,
      component: 'Select',
      componentProps: {
        options: foodCategoryList,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'cookingTypeCode',
      label: '烹饪类型：',
      labelWidth: 120,
      component: 'Select',
      componentProps: {
        options: cookingTypeList,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'cuisineCategoryCode',
      label: '菜系：',
      labelWidth: 120,
      component: 'Select',
      componentProps: {
        options: cuisineCategoryList,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'tasteCode',
      label: '口味：',
      labelWidth: 120,
      component: 'Select',
      componentProps: {
        options: tasteList,
      },
      colProps: {
        span: 6,
      },
    },
  ],
};
