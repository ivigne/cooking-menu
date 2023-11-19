/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:10:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:19
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/qinghaiProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { xiningFoodsList } from './xining';
import { haidongFoodsList } from './haidong';
import { haibeiFoodsList } from './haibei';
import { huangnanFoodsList } from './huangnan';
import { haiNanFoodsList } from './hainan';
import { guoluoFoodsList } from './guoluo';
import { yushuFoodsList } from './yushu';
import { haixiFoodsList } from './haixi';

export const qingHaiFoodsList = [].concat(
  xiningFoodsList,
  haidongFoodsList,
  haibeiFoodsList,
  huangnanFoodsList,
  haiNanFoodsList,
  guoluoFoodsList,
  yushuFoodsList,
  haixiFoodsList,
);

console.log(
  '青海青海青海青海青海青海青海青海省有： ',
  qingHaiFoodsList.length,
  qingHaiFoodsList.map((item) => item.foodName),
);
