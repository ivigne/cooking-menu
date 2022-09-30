/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-09-23 19:08:07
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

// ·四川省
// 地级市（18）自治州（3）
// ·成都市·自贡市·攀枝花市·泸州市·德阳市·绵阳市·广元市·遂宁市·内江市·乐山市·南充市·眉山市·宜宾市·广安市·达州市·雅安市·巴中市·资阳市·阿坝藏族羌族自治州·甘孜藏族自治州·凉山彝族自治州
// ·成都市
// 市辖区（12）县级市（5）县（3）
// ·锦江区·青羊区·金牛区·武侯区·成华区·龙泉驿区·青白江区·新都区·温江区·双流区·郫都区·新津区·都江堰市·彭州市·邛崃市·崇州市·简阳市·金堂县·大邑县·蒲江县
// ·自贡市
// 市辖区（4）县（2）
// ·自流井区·贡井区·大安区·沿滩区·荣县·富顺县
// ·攀枝花市
// 市辖区（3）县（2）
// ·东区·西区·仁和区·米易县·盐边县
// ·泸州市
// 市辖区（3）县（4）
// ·江阳区·纳溪区·龙马潭区·泸县·合江县·叙永县·古蔺县
// ·德阳市
// 市辖区（2）县级市（3）县（1）
// ·旌阳区·罗江区·广汉市·什邡市·绵竹市·中江县
// ·绵阳市
// 市辖区（3）县级市（1）县（4）自治县（1）
// ·涪城区·游仙区·安州区·江油市·三台县·盐亭县·梓潼县·北川羌族自治县·平武县
// ·广元市
// 市辖区（3）县（4）
// ·利州区·昭化区·朝天区·旺苍县·青川县·剑阁县·苍溪县
// ·遂宁市
// 市辖区（2）县级市（1）县（2）
// ·船山区·安居区·射洪市·蓬溪县·大英县
// ·内江市
// 市辖区（2）县级市（1）县（2）
// ·市中区·东兴区·隆昌市·威远县·资中县
// ·乐山市
// 市辖区（4）县级市（1）县（4）自治县（2）
// ·市中区·沙湾区·五通桥区·金口河区·峨眉山市·犍为县·井研县·夹江县·沐川县·峨边彝族自治县·马边彝族自治县
// ·南充市
// 市辖区（3）县级市（1）县（5）
// ·顺庆区·高坪区·嘉陵区·阆中市·南部县·营山县·蓬安县·仪陇县·西充县
// ·眉山市
// 市辖区（2）县（4）
// ·东坡区·彭山区·仁寿县·洪雅县·丹棱县·青神县
// ·宜宾市
// 市辖区（3）县（7）
// ·翠屏区·南溪区·叙州区·江安县·长宁县·高县·珙县·筠连县·兴文县·屏山县
// ·广安市
// 市辖区（2）县级市（1）县（3）
// ·广安区·前锋区·华蓥市·岳池县·武胜县·邻水县
// ·达州市
// 市辖区（2）县级市（1）县（4）
// ·通川区·达川区·万源市·宣汉县·开江县·大竹县·渠县
// ·雅安市
// 市辖区（2）县（6）
// ·雨城区·名山区·荥经县·汉源县·石棉县·天全县·芦山县·宝兴县
// ·巴中市
// 市辖区（2）县（3）
// ·巴州区·恩阳区·通江县·南江县·平昌县
// ·资阳市
// 市辖区（1）县（2）
// ·雁江区·安岳县·乐至县
// ·阿坝州
// 县级市（1）县（12）
// ·马尔康市·汶川县·理县·茂县·松潘县·九寨沟县·金川县·小金县·黑水县·壤塘县·阿坝县·若尔盖县·红原县
// ·甘孜州
// 县级市（1）县（17）
// ·康定市·泸定县·丹巴县·九龙县·雅江县·道孚县·炉霍县·甘孜县·新龙县·德格县·白玉县·石渠县·色达县·理塘县·巴塘县·乡城县·稻城县·得荣县
// ·凉山州
// 县级市（2）县（14）自治县（1）
// ·西昌市·会理市 [69]  ·木里藏族自治县·盐源县·德昌县·会东县·宁南县·普格县·布拖县·金阳县·昭觉县·喜德县·冕宁县·越西县·甘洛县·美姑县·雷波县
