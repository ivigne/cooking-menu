/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:10:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 13:48:11
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/ningxia/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { yinchuanFoodsList } from './yinchuan';
import { shizuishanFoodsList } from './shizuishan';
import { wuzhongFoodsList } from './wuzhong';
import { guyuanFoodsList } from './guyuan';
import { zhongweiFoodsList } from './zhongwei';

export const ningXiaFoodsList = [].concat(
  yinchuanFoodsList,
  shizuishanFoodsList,
  wuzhongFoodsList,
  guyuanFoodsList,
  zhongweiFoodsList,
);
// ningXiaFoodsList.map((item) => item['foodName']
console.log('宁夏宁夏宁夏宁夏宁夏宁夏宁夏宁夏省有： ' + ningXiaFoodsList.length + ' 道菜');
