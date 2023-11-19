/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:16:30
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/sichuanProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { abaFoodsList } from './aba';
import { bazhongFoodsList } from './bazhong';
import { chengduFoodsList } from './chengdu';
import { dazhouFoodsList } from './dazhou';
import { deyangFoodsList } from './deyang';
import { ganziFoodsList } from './ganzi';
import { guanganFoodsList } from './guangan';
import { guangyuanFoodsList } from './guangyuan';
import { leshanFoodsList } from './leshan';
import { liangshanFoodsList } from './liangshan';
import { luzhouFoodsList } from './luzhou';
import { meishanFoodsList } from './meishan';
import { mianyangFoodsList } from './mianyang';
import { nanchongFoodsList } from './nanchong';
import { neijiangFoodsList } from './neijiang';
import { panzhihuaFoodsList } from './panzhihua';
import { suiningFoodsList } from './suining';
import { yaanFoodsList } from './yaan';
import { yibinFoodsList } from './yibin';
import { zigongFoodsList } from './zigong';
import { ziyangFoodsList } from './ziyang';
import { othersFoodsList } from './others';

export const siChuanFoodsList = [].concat(
  abaFoodsList,
  bazhongFoodsList,
  chengduFoodsList,
  dazhouFoodsList,
  deyangFoodsList,
  ganziFoodsList,
  guanganFoodsList,
  guangyuanFoodsList,
  leshanFoodsList,
  liangshanFoodsList,
  luzhouFoodsList,
  meishanFoodsList,
  mianyangFoodsList,
  nanchongFoodsList,
  neijiangFoodsList,
  panzhihuaFoodsList,
  suiningFoodsList,
  yaanFoodsList,
  yibinFoodsList,
  zigongFoodsList,
  ziyangFoodsList,
  othersFoodsList,
);

console.log(
  '四川四川四川四川四川四川四川四川省有： ',
  siChuanFoodsList.length,
  siChuanFoodsList.map((item) => item.foodName),
);
