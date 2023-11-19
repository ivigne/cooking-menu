/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-17 10:13:33
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/yunnanProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { kunmingFoodsList } from './kunming';
import { qujingFoodsList } from './qujing';
import { yuxiFoodsList } from './yuxi';
import { baoshanFoodsList } from './baoshan';
import { zhaotongFoodsList } from './zhaotong';
import { lijiangFoodsList } from './lijiang';
import { puerFoodsList } from './puer';
import { lincangFoodsList } from './lincang';
import { chuxiongFoodsList } from './chuxiong';
import { hongheFoodsList } from './honghe';
import { wenshanFoodsList } from './wenshan';
import { xishuangbannaFoodsList } from './xishuangbanna';
import { daliFoodsList } from './dali';
import { dehongFoodsList } from './dehong';
import { nujiangFoodsList } from './nujiang';
import { diqingFoodsList } from './diqing';
export const yunNanFoodsList = [].concat(
  kunmingFoodsList,
  qujingFoodsList,
  yuxiFoodsList,
  baoshanFoodsList,
  zhaotongFoodsList,
  lijiangFoodsList,
  puerFoodsList,
  lincangFoodsList,
  chuxiongFoodsList,
  hongheFoodsList,
  wenshanFoodsList,
  xishuangbannaFoodsList,
  daliFoodsList,
  dehongFoodsList,
  nujiangFoodsList,
  diqingFoodsList,
);

console.log(
  '云南云南云南云南云南云南云南云南省有： ',
  yunNanFoodsList.length,
  yunNanFoodsList.map((item) => item.foodName),
);
