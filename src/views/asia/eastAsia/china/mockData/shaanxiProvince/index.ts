/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:10:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 15:30:27
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/shaanxiProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { xiAnFoodsList } from './xiAn';
import { tongchuanFoodsList } from './tongchuan';
import { baojiFoodsList } from './baoji';
import { xianyangFoodsList } from './xianyang';
import { weinanFoodsList } from './weinan';
import { yanAnFoodsList } from './yanAn';
import { hanzhongFoodsList } from './hanzhong';
import { yulinFoodsList } from './yulin';
import { ankangFoodsList } from './ankang';
import { shangluoFoodsList } from './shangluo';

export const shaanXiFoodsList = [].concat(
  xiAnFoodsList,
  tongchuanFoodsList,
  baojiFoodsList,
  xianyangFoodsList,
  weinanFoodsList,
  yanAnFoodsList,
  hanzhongFoodsList,
  yulinFoodsList,
  ankangFoodsList,
  shangluoFoodsList,
);

console.log(
  '陕西陕西陕西陕西陕西陕西陕西陕西省有： ',
  shaanXiFoodsList.length,
  // shaanXiFoodsList.map((item) => item['foodName']),
);
