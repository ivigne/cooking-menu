/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-13 15:45:31
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from '/@/components/Table';
// 食材类别-集合
const foodCategoryList = [
  {
    label: '牛肉',
    value: 'beef',
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
