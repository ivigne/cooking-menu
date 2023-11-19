/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 16:03:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 09:56:48
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/jilinProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { changchunFoodsList } from './changchun';
import { jilinFoodsList } from './jilin';
import { sipingFoodsList } from './siping';
import { liaoyuanFoodsList } from './liaoyuan';
import { tonghuaFoodsList } from './tonghua';
import { baishanFoodsList } from './baishan';
import { songyuanFoodsList } from './songyuan';
import { baichengFoodsList } from './baicheng';
import { yanbianFoodsList } from './yanbian';
import { othersFoodsList } from './others';

export const jiLinFoodsList = [].concat(
  changchunFoodsList,
  jilinFoodsList,
  sipingFoodsList,
  liaoyuanFoodsList,
  tonghuaFoodsList,
  baishanFoodsList,
  songyuanFoodsList,
  baichengFoodsList,
  yanbianFoodsList,
  othersFoodsList,
);

console.log(
  '吉林吉林吉林吉林吉林吉林吉林吉林省有： ',
  jiLinFoodsList.length,
  jiLinFoodsList.map((item) => item.foodName),
);
