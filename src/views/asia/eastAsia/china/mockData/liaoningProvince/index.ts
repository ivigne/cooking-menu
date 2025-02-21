/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:04:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 15:30:02
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/liaoningProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { shenyangFoodsList } from './shenyang';
import { dalianFoodsList } from './dalian';
import { anshanFoodsList } from './anshan';
import { fushunFoodsList } from './fushun';
import { benxiFoodsList } from './benxi';
import { dandongFoodsList } from './dandong';
import { jinzhouFoodsList } from './jinzhou';
import { yingkouFoodsList } from './yingkou';
import { fuxinFoodsList } from './fuxin';
import { liaoyangFoodsList } from './liaoyang';
import { panjinFoodsList } from './panjin';
import { tielingFoodsList } from './tieling';
import { chaoyangFoodsList } from './chaoyang';
import { huludaoFoodsList } from './huludao';

export const liaoNingFoodsList = [].concat(
  shenyangFoodsList,
  dalianFoodsList,
  anshanFoodsList,
  fushunFoodsList,
  benxiFoodsList,
  dandongFoodsList,
  jinzhouFoodsList,
  yingkouFoodsList,
  fuxinFoodsList,
  liaoyangFoodsList,
  panjinFoodsList,
  tielingFoodsList,
  chaoyangFoodsList,
  huludaoFoodsList,
);

console.log(
  '辽宁辽宁辽宁辽宁辽宁辽宁辽宁辽宁省有： ',
  liaoNingFoodsList.length,
  // liaoNingFoodsList.map((item) => item['foodName']),
);
