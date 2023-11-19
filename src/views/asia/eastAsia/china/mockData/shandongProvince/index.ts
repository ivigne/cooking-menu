/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:22
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/shandongProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { jinanFoodsList } from './jinan';
import { qingdaoFoodsList } from './qingdao';
import { ziboFoodsList } from './zibo';
import { zaozhuangFoodsList } from './zaozhuang';
import { dongyingFoodsList } from './dongying';
import { yantaiFoodsList } from './yantai';
import { weifangFoodsList } from './weifang';
import { jiningFoodsList } from './jining';
import { taiAnFoodsList } from './taiAn';
import { weihaiFoodsList } from './weihai';
import { rizhaoFoodsList } from './rizhao';
import { linyiFoodsList } from './linyi';
import { dezhouFoodsList } from './dezhou';
import { liaochengFoodsList } from './liaocheng';
import { binzhouFoodsList } from './binzhou';
import { hezeFoodsList } from './heze';
import { othersFoodsList } from './others';

export const shanDongFoodsList = [].concat(
  jinanFoodsList,
  qingdaoFoodsList,
  ziboFoodsList,
  zaozhuangFoodsList,
  dongyingFoodsList,
  yantaiFoodsList,
  weifangFoodsList,
  jiningFoodsList,
  taiAnFoodsList,
  weihaiFoodsList,
  rizhaoFoodsList,
  linyiFoodsList,
  dezhouFoodsList,
  liaochengFoodsList,
  binzhouFoodsList,
  hezeFoodsList,
  othersFoodsList,
);

console.log(
  '山东山东山东山东山东山东山东山东省有： ',
  shanDongFoodsList.length,
  shanDongFoodsList.map((item) => item.foodName),
);
