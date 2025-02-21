/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:01:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 15:30:11
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/shanxiProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { taiyuanFoodsList } from './taiyuan';
import { datongFoodsList } from './datong';
import { yangquanFoodsList } from './yangquan';
import { changzhiFoodsList } from './changzhi';
import { jinchengFoodsList } from './jincheng';
import { shuozhouFoodsList } from './shuozhou';
import { jinzhongFoodsList } from './jinzhong';
import { yunchengFoodsList } from './yuncheng';
import { xinzhouFoodsList } from './xinzhou';
import { linfenFoodsList } from './linfen';
import { lvliangFoodsList } from './lvliang';

export const shanXiFoodsList = [].concat(
  taiyuanFoodsList,
  datongFoodsList,
  yangquanFoodsList,
  changzhiFoodsList,
  jinchengFoodsList,
  shuozhouFoodsList,
  jinzhongFoodsList,
  yunchengFoodsList,
  xinzhouFoodsList,
  linfenFoodsList,
  lvliangFoodsList,
);

console.log(
  '山西山西山西山西山西山西山西山西省有： ',
  shanXiFoodsList.length,
  // shanXiFoodsList.map((item) => item['foodName']),
);
