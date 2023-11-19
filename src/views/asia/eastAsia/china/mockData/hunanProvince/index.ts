/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 09:48:17
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hunanProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { changshaFoodsList } from './changsha';
import { zhuzhouFoodsList } from './zhuzhou';
import { xiangtanFoodsList } from './xiangtan';
import { hengyangFoodsList } from './hengyang';
import { shaoyangFoodsList } from './shaoyang';
import { yueyangFoodsList } from './yueyang';
import { changdeFoodsList } from './changde';
import { zhangjiajieFoodsList } from './zhangjiajie';
import { yiyangFoodsList } from './yiyang';
import { chenzhouFoodsList } from './chenzhou';
import { yongzhouFoodsList } from './yongzhou';
import { huaihuaFoodsList } from './huaihua';
import { loudiFoodsList } from './loudi';
import { xiangxiFoodsList } from './xiangxi';
import { othersFoodsList } from './others';

export const huNanFoodsList = [].concat(
  changshaFoodsList,
  zhuzhouFoodsList,
  xiangtanFoodsList,
  hengyangFoodsList,
  shaoyangFoodsList,
  yueyangFoodsList,
  changdeFoodsList,
  zhangjiajieFoodsList,
  yiyangFoodsList,
  chenzhouFoodsList,
  yongzhouFoodsList,
  huaihuaFoodsList,
  loudiFoodsList,
  xiangxiFoodsList,
  othersFoodsList,
);

console.log('湖南省有： ' + huNanFoodsList.length + ' 道菜');
console.log(
  '--------长沙菜单： ' + changshaFoodsList.length,
  changshaFoodsList.map((item) => item.foodName),
);
console.log(
  '--------zhuzhouFoodsList菜单： ' + zhuzhouFoodsList.length,
  zhuzhouFoodsList.map((item) => item.foodName),
);
console.log('--------  xiangtanFoodsList菜单： ' + xiangtanFoodsList.map((item) => item.foodName));
console.log('--------hengyangFoodsList菜单： ' + hengyangFoodsList.map((item) => item.foodName));
console.log('--------shaoyangFoodsList菜单： ' + shaoyangFoodsList.map((item) => item.foodName));
console.log('--------yueyangFoodsList菜单： ' + yueyangFoodsList.map((item) => item.foodName));
console.log('--------zhangjiajie菜单： ' + zhangjiajieFoodsList.map((item) => item.foodName));
console.log('--------changdeFoodsList菜单： ' + changdeFoodsList.map((item) => item.foodName));
console.log('--------yiyangFoodsList菜单： ' + yiyangFoodsList.map((item) => item.foodName));
console.log('--------  chenzhouFoodsList菜单： ' + chenzhouFoodsList.map((item) => item.foodName));
console.log('--------yongzhouFoodsList菜单： ' + yongzhouFoodsList.map((item) => item.foodName));
console.log('--------huaihuaFoodsList菜单： ' + huaihuaFoodsList.map((item) => item.foodName));
console.log('--------loudiFoodsList菜单： ' + loudiFoodsList.map((item) => item.foodName));
console.log('--------xiangxiFoodsList菜单： ' + xiangxiFoodsList.map((item) => item.foodName));
console.log(
  '-------- othersFoodsList菜单： ' + othersFoodsList.length,
  othersFoodsList.map((item) => item.foodName),
);
