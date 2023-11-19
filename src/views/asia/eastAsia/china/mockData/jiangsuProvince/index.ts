/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:04:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:11
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/jiangsuProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nanjingFoodsList } from './nanjing';
import { wuxiFoodsList } from './wuxi';
import { xuzhouFoodsList } from './xuzhou';
import { changzhouFoodsList } from './changzhou';
import { suzhouFoodsList } from './suzhou';
import { nantongFoodsList } from './nantong';
import { lianyungangFoodsList } from './lianyungang';
import { huaiAnFoodsList } from './huaiAn';
import { yanchengFoodsList } from './yancheng';
import { yangzhouFoodsList } from './yangzhou';
import { zhenjiangFoodsList } from './zhenjiang';
import { taizhouFoodsList } from './taizhou';
import { suqianFoodsList } from './suqian';
import { othersFoodsList } from './others';
export const jiangSuFoodsList = [].concat(
  nanjingFoodsList,
  wuxiFoodsList,
  xuzhouFoodsList,
  changzhouFoodsList,
  suzhouFoodsList,
  nantongFoodsList,
  lianyungangFoodsList,
  huaiAnFoodsList,
  yanchengFoodsList,
  yangzhouFoodsList,
  zhenjiangFoodsList,
  taizhouFoodsList,
  suqianFoodsList,
  othersFoodsList,
);

console.log(
  '江苏江苏江苏江苏江苏江苏江苏江苏省有： ',
  jiangSuFoodsList.length,
  jiangSuFoodsList.map((item) => item.foodName),
);
