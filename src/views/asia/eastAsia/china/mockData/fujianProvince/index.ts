/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-13 10:31:34
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/fujianProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fuzhouFoodsList } from './fuzhou';
import { xiamenFoodsList } from './xiamen';
import { putianFoodsList } from './putian';
import { sanmingFoodsList } from './sanming';
import { quanzhouFoodsList } from './quanzhou';
import { zhangzhouFoodsList } from './zhangzhou';
import { nanpingFoodsList } from './nanping';
import { longyanFoodsList } from './longyan';
import { ningdeFoodsList } from './ningde';
import { pingtanFoodsList } from './pingtan';
import { othersFoodsList } from './others';

export const fuJianFoodsList = [].concat(
  fuzhouFoodsList,
  xiamenFoodsList,
  putianFoodsList,
  sanmingFoodsList,
  quanzhouFoodsList,
  zhangzhouFoodsList,
  nanpingFoodsList,
  longyanFoodsList,
  ningdeFoodsList,
  pingtanFoodsList,
  othersFoodsList,
);

console.log('福建省有： ' + fuJianFoodsList.length + ' 道菜');
