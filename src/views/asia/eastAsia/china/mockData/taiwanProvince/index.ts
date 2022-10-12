/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:14
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-12 15:55:04
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/taiwanProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { taipeiFoodsList } from './taipei';
import { gaoxiongFoodsList } from './gaoxiong';
import { tainanFoodsList } from './tainan';
import { taizhongFoodsList } from './taizhong';
import { jilongFoodsList } from './jilong';
import { xinzhuFoodsList } from './xinzhu';
import { jiayiFoodsList } from './jiayi';
import { xinbeiFoodsList } from './xinbei';
import { taoyuanFoodsList } from './taoyuan';
import { othersCountyFoodsList } from './othersCounty';

export const taiWanFoodsList = [].concat(
  taipeiFoodsList,
  gaoxiongFoodsList,
  tainanFoodsList,
  taizhongFoodsList,
  jilongFoodsList,
  xinzhuFoodsList,
  jiayiFoodsList,
  taoyuanFoodsList,
  othersCountyFoodsList,
  xinbeiFoodsList,
);
