// import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
import { anHuiSnacksFoodsList } from './mockData/anHui';
import { aoMenSnacksFoodsList } from './mockData/aoMen';
import { beiJingSnacksFoodsList } from './mockData/beiJing';
import { chongQingSnacksFoodsList } from './mockData/chongQing';
import { fuJianSnacksFoodsList } from './mockData/fuJian';
import { ganSuSnacksFoodsList } from './mockData/ganSu';
import { guangDongSnacksFoodsList } from './mockData/guangDong';
import { guangXiSnacksFoodsList } from './mockData/guangXi';
import { guiZhouSnacksFoodsList } from './mockData/guiZhou';
import { haiNanSnacksFoodsList } from './mockData/haiNan';
import { heBeiSnacksFoodsList } from './mockData/heBei';
import { heiLongJiangSnacksFoodsList } from './mockData/heiLongJiang';
import { heNanSnacksFoodsList } from './mockData/heNan';
import { huBeiSnacksFoodsList } from './mockData/huBei';
import { huNanSnacksFoodsList } from './mockData/huNan';
import { innerMongoliaSnacksFoodsList } from './mockData/innerMongolia';
import { jiangSuSnacksFoodsList } from './mockData/jiangSu';
import { jiangXiSnacksFoodsList } from './mockData/jiangXi';
import { liaoNingSnacksFoodsList } from './mockData/liaoNing';
import { ningXiaSnacksFoodsList } from './mockData/ningXia';
import { shangHaiSnacksFoodsList } from './mockData/shangHai';
import { siChuanSnacksFoodsList } from './mockData/siChuan';
import { taiWanSnacksFoodsList } from './mockData/taiWan';
import { shanDongSnacksFoodsList } from './mockData/shanDong';
import { shanXiSnacksFoodsList } from './mockData/shanXi';
import { tianJinSnacksFoodsList } from './mockData/tianJin';
import { shaanXiSnacksFoodsList } from './mockData/shaanXi';
import { hongKongSnacksFoodsList } from './mockData/hongKong';
import { xinJiangSnacksFoodsList } from './mockData/xinJiang';
import { yunNanSnacksFoodsList } from './mockData/yunNan';
import { zheJiangSnacksFoodsList } from './mockData/zheJiang';
import { othersSnacksFoodsList } from './mockData/others';

export const chinaSnacksFoodsList = {
  anHui: anHuiSnacksFoodsList,
  aoMen: aoMenSnacksFoodsList,
  beiJing: beiJingSnacksFoodsList,
  chongQing: chongQingSnacksFoodsList,
  fuJian: fuJianSnacksFoodsList,
  ganSu: ganSuSnacksFoodsList,
  guangDong: guangDongSnacksFoodsList,
  guangXi: guangXiSnacksFoodsList,
  guiZhou: guiZhouSnacksFoodsList,
  haiNan: haiNanSnacksFoodsList,
  heBei: heBeiSnacksFoodsList,
  heiLongJiang: heiLongJiangSnacksFoodsList,
  heNan: heNanSnacksFoodsList,
  hongKong: hongKongSnacksFoodsList,
  huBei: huBeiSnacksFoodsList,
  huNan: huNanSnacksFoodsList,
  innerMongolia: innerMongoliaSnacksFoodsList,
  jiangSu: jiangSuSnacksFoodsList,
  jiangXi: jiangXiSnacksFoodsList,
  liaoNing: liaoNingSnacksFoodsList,
  ningXia: ningXiaSnacksFoodsList,
  shaanXi: shaanXiSnacksFoodsList,
  shangDong: shanDongSnacksFoodsList,
  shangHai: shangHaiSnacksFoodsList,
  shanXi: shanXiSnacksFoodsList,
  siChuan: siChuanSnacksFoodsList,
  taiWan: taiWanSnacksFoodsList,
  tianJin: tianJinSnacksFoodsList,
  xinJiang: xinJiangSnacksFoodsList,
  yunNan: yunNanSnacksFoodsList,
  zheJiang: zheJiangSnacksFoodsList,
  others: othersSnacksFoodsList,
};

// console.log('----------安徽小吃:', anHuiSnacksFoodsList.length);
const chinaSnacksFoodsListName = Object.keys(chinaSnacksFoodsList);
const foodNames = chinaSnacksFoodsListName.map((name) =>
  chinaSnacksFoodsList[name]?.map((item) => item?.foodName),
);
console.log('----------中国小吃:', foodNames.length);
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
