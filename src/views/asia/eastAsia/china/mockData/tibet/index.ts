/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:10:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:30
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/tibet/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lasaFoodsList } from './lasa';
import { rikazeFoodsList } from './rikaze';
import { changduFoodsList } from './changdu';
import { linzhiFoodsList } from './linzhi';
import { shannanFoodsList } from './shannan';
import { naquFoodsList } from './naqu';
import { aliFoodsList } from './ali';

export const tibetFoodsList = [].concat(
  lasaFoodsList,
  rikazeFoodsList,
  changduFoodsList,
  linzhiFoodsList,
  shannanFoodsList,
  naquFoodsList,
  aliFoodsList,
);

console.log(
  '西藏西藏西藏西藏西藏西藏西藏西藏省有： ',
  tibetFoodsList.length,
  tibetFoodsList.map((item) => item.foodName),
);
