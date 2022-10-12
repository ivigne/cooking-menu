/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:26
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-12 15:43:03
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/guizhouProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { guiyangFoodsList } from './guiyang';
import { lupanshuiFoodsList } from './lupanshui';
import { zunyiFoodsList } from './zunyi';
import { anshunFoodsList } from './anshun';
import { bijieFoodsList } from './bijie';
import { tongrenFoodsList } from './tongren';
import { qianxinanBuyiFoodsList } from './qianxinanBuyi';
import { qiannanMiaoFoodsList } from './qiannanMiao';
import { qiannanBuyiFoodsList } from './qiannanBuyi';

export const guiZhouFoodsList = [].concat(
  guiyangFoodsList,
  lupanshuiFoodsList,
  zunyiFoodsList,
  anshunFoodsList,
  bijieFoodsList,
  tongrenFoodsList,
  qianxinanBuyiFoodsList,
  qiannanMiaoFoodsList,
  qiannanBuyiFoodsList,
);
