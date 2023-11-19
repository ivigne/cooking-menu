/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:08:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-13 10:34:10
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/guangdongProvince/index.ts
 * @Description: 这是默认设置,请设置`customMade`,打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { guangzhouFoodsList } from './guangzhou';
import { shaoguanFoodsList } from './shaoguan';
import { shenzhenFoodsList } from './shenzhen';
import { zhuhaiFoodsList } from './zhuhai';
import { shantouFoodsList } from './shantou';
import { foshanFoodsList } from './foshan';
import { jiangmenFoodsList } from './jiangmen';
import { zhanjiangFoodsList } from './zhanjiang';
import { maomingFoodsList } from './maoming';
import { zhaoqingFoodsList } from './zhaoqing';
import { huizhouFoodsList } from './huizhou';
import { meizhouFoodsList } from './meizhou';
import { shanweiFoodsList } from './shanwei';
import { heyuanFoodsList } from './heyuan';
import { yangjiangFoodsList } from './yangjiang';
import { qingyuanFoodsList } from './qingyuan';
import { dongguanFoodsList } from './dongguan';
import { zhongshanFoodsList } from './zhongshan';
import { chaozhouFoodsList } from './chaozhou';
import { jieyangFoodsList } from './jieyang';
import { yunfuFoodsList } from './yunfu';
import { othersFoodsList } from './others';

export const guangDongFoodsList = [].concat(
  guangzhouFoodsList,
  shaoguanFoodsList,
  shenzhenFoodsList,
  zhuhaiFoodsList,
  shantouFoodsList,
  foshanFoodsList,
  jiangmenFoodsList,
  zhanjiangFoodsList,
  maomingFoodsList,
  zhaoqingFoodsList,
  huizhouFoodsList,
  meizhouFoodsList,
  shanweiFoodsList,
  heyuanFoodsList,
  yangjiangFoodsList,
  qingyuanFoodsList,
  dongguanFoodsList,
  zhongshanFoodsList,
  chaozhouFoodsList,
  jieyangFoodsList,
  yunfuFoodsList,
  othersFoodsList,
);

console.log('广东省有： ' + guangDongFoodsList.length + ' 道菜');
