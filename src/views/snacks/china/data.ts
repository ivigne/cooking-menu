// import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
import { anhuiFoodsList } from './mockData/anhui';
import { aomenFoodsList } from './mockData/aomen';
import { beijingFoodsList } from './mockData/beijing';
import { chongqingFoodsList } from './mockData/chongqing';
import { fujianFoodsList } from './mockData/fujian';
import { gansuFoodsList } from './mockData/gansu';
import { guangdongFoodsList } from './mockData/guangdong';
import { guangxiFoodsList } from './mockData/guangxi';
import { guizhouFoodsList } from './mockData/guizhou';
import { hainanFoodsList } from './mockData/hainan';
import { hebeiFoodsList } from './mockData/hebei';
import { heilongjiangFoodsList } from './mockData/heilongjiang';
import { henanFoodsList } from './mockData/henan';
import { hubeiFoodsList } from './mockData/hubei';
import { hunanFoodsList } from './mockData/hunan';
import { innerMongoliaFoodsList } from './mockData/innerMongolia';
import { jiangshuFoodsList } from './mockData/jiangshu';
import { shandongFoodsList } from './mockData/shandong';
import { shanghaiFoodsList } from './mockData/shanghai';
import { sichuanFoodsList } from './mockData/sichuan';
import { taiwanFoodsList } from './mockData/taiwan';
import { shanxiFoodsList } from './mockData/shanxi';
import { tianjinFoodsList } from './mockData/tianjin';
import { shannxiFoodsList } from './mockData/shannxi';
import { hongKongFoodsList } from './mockData/hongKong';
import { xinjiangFoodsList } from './mockData/xinjiang';
import { yunnanFoodsList } from './mockData/yunnan';
import { zhejiangFoodsList } from './mockData/zhejiang';
import { othersFoodsList } from './mockData/others';

export const chinaSnacksFoodsList = [].concat(
  anhuiFoodsList,
  aomenFoodsList,
  hebeiFoodsList,
  beijingFoodsList,
  chongqingFoodsList,
  fujianFoodsList,
  guangdongFoodsList,
  guangxiFoodsList,
  guizhouFoodsList,
  hainanFoodsList,
  heilongjiangFoodsList,
  henanFoodsList,
  hunanFoodsList,
  hubeiFoodsList,
  jiangshuFoodsList,
  shandongFoodsList,
  shanghaiFoodsList,
  gansuFoodsList,
  sichuanFoodsList,
  hongKongFoodsList,
  taiwanFoodsList,
  shanxiFoodsList,
  tianjinFoodsList,
  shannxiFoodsList,
  innerMongoliaFoodsList,
  xinjiangFoodsList,
  yunnanFoodsList,
  zhejiangFoodsList,
  othersFoodsList,
);
// console.log('----------安徽小吃:', anhuiFoodsList.length);
console.log('----------中国小吃:', chinaSnacksFoodsList.length);
const foodNames = chinaSnacksFoodsList.map((item) => item?.foodName);
console.log('----------小吃所有名字:', foodNames);

function unipFunc(arr) {
  const newArr = [];
  arr.forEach((item: never) => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item) && newArr.indexOf(item) === -1) {
      newArr.push(item);
      return newArr;
    }
  });
  console.log('重复菜名菜名：', newArr);
}
unipFunc(foodNames);

// useCopyToClipboard(JSON.stringify());
console.log('useCopyToClipboard', Array.from(new Set(foodNames)));

import { chutneyFoodsList } from '/@/views/more/chutney/chutney';
import { dessertFoodsList } from '/@/views/more/dessert/dessert';
import { dippingFoodsList } from '/@/views/more/dipping/dipping';
import { flavoringFoodsList } from '/@/views/more/flavoring/flavoring';
import { drinksFoodsList } from '/@/views/more/drinks/drinks';
import { ingredientsTypesFoodsList } from '/@/views/more/ingredientsTypes/ingredientsTypes';
import { kitchenwareList } from '/@/views/more/kitchenware/index';
import { meatballsFoodsList } from '/@/views/more/meatballs/meatballs';
import { orphanedFoodsList } from '/@/views/more/orphaned/index';
import { spiceFoodsList } from '/@/views/more/spice/index';
import { sugarFoodsList } from '/@/views/more/sugar/sugar';
import { teaFoodsList } from '/@/views/more/tea/tea';
import { wineFoodsList } from '/@/views/more/wine/wine';
const moreList = [].concat(
  chutneyFoodsList,
  dessertFoodsList,
  dippingFoodsList,
  flavoringFoodsList,
  drinksFoodsList,
  ingredientsTypesFoodsList,
  kitchenwareList,
  meatballsFoodsList,
  orphanedFoodsList,
  spiceFoodsList,
  sugarFoodsList,
  teaFoodsList,
  wineFoodsList,
);
const moreFoodNames = moreList.map((item) => item?.foodName);
console.log('---------moreFoodNames--------');
unipFunc(moreFoodNames);
// import { animeFoodsList } from '/@/views/media/anime/data';
// import { archaeologyFoodsList } from '/@/views/media/archaeology/data';
// import { gameFoodsList } from '/@/views/media/game/data';
// import { movieFoodsList } from '/@/views/media/movie/data';
// import { tvFoodsList } from '/@/views/media/tv/data';
// const mediaList = [].concat(
//   animeFoodsList,
//   archaeologyFoodsList,
//   gameFoodsList,
//   movieFoodsList,
//   tvFoodsList,
// );
import { bunFoodsList } from '/@/views/staples/bun/bun';
import { cakeFoodsList } from '/@/views/staples/cake/cake';
import { dumplingFoodsList } from '/@/views/staples/dumpling/dumpling';
import { flatcakeFoodsList } from '/@/views/staples/flatcake/flatcake';
import { flourFoodsList } from '/@/views/staples/flour/flour';
import { gruelFoodsList } from '/@/views/staples/gruel/gruel';
import { knowFoodsList } from '/@/views/staples/know/know';
import { noodleFoodsList } from '/@/views/staples/noodle/noodle';
import { pastryFoodsList } from '/@/views/staples/pastry/pastry';
import { potHelmetFoodsList } from '/@/views/staples/potHelmet/potHelmet';
import { riceFoodsList } from '/@/views/staples/rice/rice';
import { ricedumplingsFoodsList } from '/@/views/staples/ricedumplings/ricedumplings';
import { siumaiFoodsList } from '/@/views/staples/siumai/siumai';
import { soupFoodsList, soupFoodsList1 } from '/@/views/staples/soup/soup';
const staplesList = [].concat(
  bunFoodsList,
  cakeFoodsList,
  dumplingFoodsList,
  flatcakeFoodsList,
  flourFoodsList,
  gruelFoodsList,
  knowFoodsList,
  noodleFoodsList,
  pastryFoodsList,
  potHelmetFoodsList,
  riceFoodsList,
  ricedumplingsFoodsList,
  siumaiFoodsList,
  soupFoodsList,
  soupFoodsList1,
);
const staplesFoodNames = staplesList.map((item) => item?.foodName);
console.log('---------staplesFoodNames--------');
unipFunc(staplesFoodNames);
