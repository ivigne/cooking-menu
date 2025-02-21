/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 15:29:57
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/jiangxiProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nanchangFoodsList } from './nanchang';
import { jingdezhenFoodsList } from './jingdezhen';
import { pingxiangFoodsList } from './pingxiang';
import { jiujiangFoodsList } from './jiujiang';
import { xinyuFoodsList } from './xinyu';
import { yingtanFoodsList } from './yingtan';
import { ganzhouFoodsList } from './ganzhou';
import { jiAnFoodsList } from './jiAn';
import { yichunFoodsList } from './yichun';
import { fuzhouFoodsList } from './fuzhou';
import { shangraoFoodsList } from './shangrao';
import { othersFoodsList } from './others';

export const jiangXiFoodsList = [].concat(
  nanchangFoodsList,
  jingdezhenFoodsList,
  pingxiangFoodsList,
  jiujiangFoodsList,
  xinyuFoodsList,
  yingtanFoodsList,
  ganzhouFoodsList,
  jiAnFoodsList,
  yichunFoodsList,
  fuzhouFoodsList,
  shangraoFoodsList,
  othersFoodsList,
);

console.log(
  '江西江西江西江西江西江西江西江西省有： ',
  jiangXiFoodsList.length,
  // jiangXiFoodsList.map((item) => item['foodName']),
);
