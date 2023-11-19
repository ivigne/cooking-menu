/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:07:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-13 10:31:23
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hubeiProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wuhanFoodsList } from './wuhan';
import { huangshiFoodsList } from './huangshi';
import { shiyanFoodsList } from './shiyan';
import { yichangFoodsList } from './yichang';
import { xiangyangFoodsList } from './xiangyang';
import { ezhouFoodsList } from './ezhou';
import { jingmenFoodsList } from './jingmen';
import { xiaoganFoodsList } from './xiaogan';
import { jingzhouFoodsList } from './jingzhou';
import { huanggangFoodsList } from './huanggang';
import { xianningFoodsList } from './xianning';
import { suizhouFoodsList } from './suizhou';
import { enshiFoodsList } from './enshi';
import { tianmenFoodsList } from './tianmen';
import { xiantaoFoodsList } from './xiantao';
import { othersFoodsList } from './others';

export const huBeiFoodsList = [].concat(
  wuhanFoodsList,
  huangshiFoodsList,
  shiyanFoodsList,
  yichangFoodsList,
  xiangyangFoodsList,
  ezhouFoodsList,
  jingmenFoodsList,
  xiaoganFoodsList,
  jingzhouFoodsList,
  huanggangFoodsList,
  xianningFoodsList,
  suizhouFoodsList,
  enshiFoodsList,
  tianmenFoodsList,
  xiantaoFoodsList,
  othersFoodsList,
);

console.log('湖北省有： ' + huBeiFoodsList.length + ' 道菜');
