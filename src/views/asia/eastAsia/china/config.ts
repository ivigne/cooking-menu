/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-21 17:20:13
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { BasicColumn, FormProps } from '/@/components/Table';
import {
  foodCategoryList,
  cuisineCategoryList,
  tasteList,
  cookingTypeList,
  provinceOptions,
} from '/@/common/commonConfig';

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
