/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-24 17:51:59
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hainanProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { haikouFoodsList } from './haikou';
import { sanyaFoodsList } from './sanya';
import { sanshaFoodsList } from './sansha';
import { danzhouFoodsList } from './danzhou';
import { othersFoodsList } from './others';

export const haiNanFoodsList = [].concat(
  haikouFoodsList,
  sanyaFoodsList,
  sanshaFoodsList,
  danzhouFoodsList,
  othersFoodsList,
);
