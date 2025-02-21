import { unipFunc } from '/@/utils/general';
// import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
import { anHuiSnacksFoodsList } from './mockData/anhui';
import { aoMenSnacksFoodsList } from './mockData/aomen';
import { beiJingSnacksFoodsList } from './mockData/beijing';
import { chongQingSnacksFoodsList } from './mockData/chongqing';
import { fuJianSnacksFoodsList } from './mockData/fuJian';
import { ganSuSnacksFoodsList } from './mockData/gansu';
import { guangDongSnacksFoodsList } from './mockData/guangdong';
import { guangXiSnacksFoodsList } from './mockData/guangxi';
import { guiZhouSnacksFoodsList } from './mockData/guizhou';
import { haiNanSnacksFoodsList } from './mockData/hainan';
import { heBeiSnacksFoodsList } from './mockData/hebei';
import { heiLongJiangSnacksFoodsList } from './mockData/heilongjiang';
import { heNanSnacksFoodsList } from './mockData/henan';
import { huBeiSnacksFoodsList } from './mockData/hubei';
import { huNanSnacksFoodsList } from './mockData/hunan';
import { innerMongoliaSnacksFoodsList } from './mockData/innerMongolia';
import { jiangSuSnacksFoodsList } from './mockData/jiangSu';
import { jiangXiSnacksFoodsList } from './mockData/jiangxi';
import { liaoNingSnacksFoodsList } from './mockData/liaoning';
import { ningXiaSnacksFoodsList } from './mockData/ningxia';
import { shangHaiSnacksFoodsList } from './mockData/shanghai';
import { siChuanSnacksFoodsList } from './mockData/sichuan';
import { taiWanSnacksFoodsList } from './mockData/taiwan';
import { shanDongSnacksFoodsList } from './mockData/shandong';
import { shanXiSnacksFoodsList } from './mockData/shanxi';
import { tianJinSnacksFoodsList } from './mockData/tianjin';
import { shaanXiSnacksFoodsList } from './mockData/shaanXi';
import { hongKongSnacksFoodsList } from './mockData/hongKong';
import { xinJiangSnacksFoodsList } from './mockData/xinjiang';
import { yunNanSnacksFoodsList } from './mockData/yunnan';
import { zheJiangSnacksFoodsList } from './mockData/zhejiang';
import { othersSnacksFoodsList } from './mockData/others';
// 中国小吃 数据集-数组形式
export const chinaSnacksFoodsData = [].concat(
  anHuiSnacksFoodsList,
  aoMenSnacksFoodsList,
  beiJingSnacksFoodsList,
  chongQingSnacksFoodsList,
  fuJianSnacksFoodsList,
  ganSuSnacksFoodsList,
  guangDongSnacksFoodsList,
  guangXiSnacksFoodsList,
  guiZhouSnacksFoodsList,
  haiNanSnacksFoodsList,
  heBeiSnacksFoodsList,
  heiLongJiangSnacksFoodsList,
  heNanSnacksFoodsList,
  huBeiSnacksFoodsList,
  huNanSnacksFoodsList,
  innerMongoliaSnacksFoodsList,
  jiangSuSnacksFoodsList,
  jiangXiSnacksFoodsList,
  liaoNingSnacksFoodsList,
  ningXiaSnacksFoodsList,
  shaanXiSnacksFoodsList,
  shanDongSnacksFoodsList,
  shangHaiSnacksFoodsList,
  shanXiSnacksFoodsList,
  siChuanSnacksFoodsList,
  taiWanSnacksFoodsList,
  tianJinSnacksFoodsList,
  xinJiangSnacksFoodsList,
  yunNanSnacksFoodsList,
  zheJiangSnacksFoodsList,
  othersSnacksFoodsList,
);

// 中国小吃 数据集-数组对象形式
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
// 根据省份的菜系数量做排序，数量从小到大
const chinaSnacksFoodsListName = Object.keys(chinaSnacksFoodsList).sort(
  (a, b) => chinaSnacksFoodsList[a].length - chinaSnacksFoodsList[b].length,
);
// 获取排序后的数据进行获取长度和菜名的展示
const foodNames = {};
chinaSnacksFoodsListName.map((name) => {
  foodNames[name] = chinaSnacksFoodsList[name]?.map((item) => item['foodName']);
  // console.log(name, foodNames[name], foodNames[name].length);
});
// 获取排序后的所有小吃
export const foodNameList = ref<any>([]);
foodNameList.value =
  Object.values(foodNames).reduce((prev: any, cur: any) => {
    return prev && prev.concat(cur);
  }) || [];
console.log('----------中国小吃:', foodNameList.value.length, chinaSnacksFoodsData.length);
// console.log('----------小吃所有名字:', foodNames);
console.log('----------------分割线  中国小吃  end--------------');

unipFunc(foodNameList);

// handleNames(chinaSnacksFoodsList);

// useCopyToClipboard(JSON.stringify());

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
import { essertFoodsList } from '/@/views/more/essert/essert';
export const moreList = [].concat(
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
  essertFoodsList,
);
export const moreObj = {
  chutney: chutneyFoodsList,
  dessert: dessertFoodsList,
  dipping: dippingFoodsList,
  flavoring: flavoringFoodsList,
  drinks: drinksFoodsList,
  ingredientsTypes: ingredientsTypesFoodsList,
  kitchenware: kitchenwareList,
  meatballs: meatballsFoodsList,
  orphaned: orphanedFoodsList,
  spice: spiceFoodsList,
  sugar: sugarFoodsList,
  tea: teaFoodsList,
  wine: wineFoodsList,
  essert: essertFoodsList,
};
export const moreFoodNames = moreList.map((item) => item['foodName']);

console.log('---------moreFoodNames--------', moreFoodNames);
unipFunc(moreFoodNames);
// handleNames(moreObj);
console.log('----------------分割线  更多美食  end--------------');

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
// import { allname } from '/@/views/asia/eastAsia/china/data';
// import { handleNames } from '/@/utils/general';
import { ref } from 'vue';
import { chinaAreaEastProvinceSouthLineFirst } from '/@/common/chinaEveryAreaData';
// import { groupBy } from '/@/utils/general';
export const staplesList = [].concat(
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
export const staplesFoodNames = staplesList.map((item) => item['foodName']);
console.log('---------staplesFoodNames--------', staplesFoodNames);
unipFunc(staplesFoodNames);
console.log('----------------分割线  主食  end--------------');

// console.log('---------所有菜谱查重--------');
// const allList = [].concat(allname, foodNameList.value, moreFoodNames, staplesFoodNames);
// unipFunc(allList);
const snacksListByCity = chinaSnacksFoodsData.filter((item) =>
  chinaAreaEastProvinceSouthLineFirst.includes(item['city']),
);
console.log('华东-南方路线-第一次打卡的城市集合-已删减小吃有:', snacksListByCity.length, ' 道菜');
const moreListByCity = moreList.filter((item) =>
  chinaAreaEastProvinceSouthLineFirst.includes(item['city']),
);
console.log('华东-南方路线-第一次打卡的城市集合-已删减更多有:', moreListByCity.length, ' 道菜');
const staplesListByCity = staplesList.filter((item) =>
  chinaAreaEastProvinceSouthLineFirst.includes(item['city']),
);
console.log('华东-南方路线-第一次打卡的城市集合-已删减主食有:', staplesListByCity.length, ' 道菜');

const totalListByCity = [].concat(snacksListByCity, moreListByCity, staplesListByCity);
// const totalObj = groupBy(totalListByCity, 'city');
console.log(
  '华东-南方路线-第一次打卡的城市集合-总计有:',
  totalListByCity.length,
  '道菜',
  // totalListByCity,
  chinaAreaEastProvinceSouthLineFirst.length === 1 &&
    totalListByCity.map((item) => item['foodName']),
  // totalObj,
);
