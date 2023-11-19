/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:11:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:32
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/xinjiang/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { wulumuqiFoodsList } from './wulumuqi';
import { kelamayiFoodsList } from './kelamayi';
import { tulufanFoodsList } from './tulufan';
import { hamiFoodsList } from './hami';
import { changjiFoodsList } from './changji';
import { boertalaFoodsList } from './boertala';
import { bayinguolengFoodsList } from './bayinguoleng';
import { akesuFoodsList } from './akesu';
import { kezilesukeerkeziFoodsList } from './kezilesukeerkezi';
import { kashiFoodsList } from './kashi';
import { hetianFoodsList } from './hetian';
import { yiliFoodsList } from './yili';
import { tachengFoodsList } from './tacheng';
import { aletaiFoodsList } from './aletai';

export const xinJiangFoodsList = [].concat(
  wulumuqiFoodsList,
  kelamayiFoodsList,
  tulufanFoodsList,
  hamiFoodsList,
  changjiFoodsList,
  boertalaFoodsList,
  bayinguolengFoodsList,
  akesuFoodsList,
  kezilesukeerkeziFoodsList,
  kashiFoodsList,
  hetianFoodsList,
  yiliFoodsList,
  tachengFoodsList,
  aletaiFoodsList,
);

console.log(
  '新疆新疆新疆新疆新疆新疆新疆新疆省有： ',
  xinJiangFoodsList.length,
  xinJiangFoodsList.map((item) => item.foodName),
);
