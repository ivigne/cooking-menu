/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:04:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 15:30:24
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/zhejiangProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { hangzhouFoodsList } from './hangzhou';
import { ningboFoodsList } from './ningbo';
import { wenzhouFoodsList } from './wenzhou';
import { jiaxingFoodsList } from './jiaxing';
import { huzhouFoodsList } from './huzhou';
import { shaoxingFoodsList } from './shaoxing';
import { jinhuaFoodsList } from './jinhua';
import { quzhouFoodsList } from './quzhou';
import { zhoushanFoodsList } from './zhoushan';
import { taizhouFoodsList } from './taizhou';
import { lishuiFoodsList } from './lishui';
import { othersFoodsList } from './others';

export const zheJiangFoodsList = [].concat(
  hangzhouFoodsList,
  ningboFoodsList,
  wenzhouFoodsList,
  jiaxingFoodsList,
  huzhouFoodsList,
  shaoxingFoodsList,
  jinhuaFoodsList,
  quzhouFoodsList,
  zhoushanFoodsList,
  taizhouFoodsList,
  lishuiFoodsList,
  othersFoodsList,
);

console.log(
  '浙江浙江浙江浙江浙江浙江浙江浙江省有： ',
  zheJiangFoodsList.length,
  // zheJiangFoodsList.map((item) => item['foodName']),
);
