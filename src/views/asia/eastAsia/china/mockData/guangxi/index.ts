/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-13 10:34:08
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/guangxi/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nanningFoodsList } from './nanning';
import { liuzhouFoodsList } from './liuzhou';
import { guilinFoodsList } from './guilin';
import { wuzhouFoodsList } from './wuzhou';
import { beihaiFoodsList } from './beihai';
import { fangchenggangFoodsList } from './fangchenggang';
import { qinzhouFoodsList } from './qinzhou';
import { guigangFoodsList } from './guigang';
import { yulinFoodsList } from './yulin';
import { baisheFoodsList } from './baishe';
import { hezhouFoodsList } from './hezhou';
import { hechiFoodsList } from './hechi';
import { laibinFoodsList } from './laibin';
export const guangXiFoodsList = [].concat(
  nanningFoodsList,
  liuzhouFoodsList,
  guilinFoodsList,
  wuzhouFoodsList,
  beihaiFoodsList,
  fangchenggangFoodsList,
  qinzhouFoodsList,
  guigangFoodsList,
  yulinFoodsList,
  baisheFoodsList,
  hezhouFoodsList,
  hechiFoodsList,
  laibinFoodsList,
);

console.log('广西省有： ' + guangXiFoodsList.length + ' 道菜');
