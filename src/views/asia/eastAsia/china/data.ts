/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-09-27 12:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 17:23:07
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { unipFunc } from '/@/utils/general';
import { anHuiFoodsList } from './mockData/anhuiProvince/index';
import { aoMenFoodsList } from './mockData/aomen/index';
import { beiJingFoodsList } from './mockData/beijing/index';
import { chongQingFoodsList } from './mockData/chongqing/index';
import { fuJianFoodsList } from './mockData/fujianProvince/index';
import { ganSuFoodsList } from './mockData/gansuProvince/index';
import { guangDongFoodsList } from './mockData/guangdongProvince/index';
import { guangXiFoodsList } from './mockData/guangxi/index';
import { guiZhouFoodsList } from './mockData/guizhouProvince/index';
import { haiNanFoodsList } from './mockData/hainanProvince/index';
import { heBeiFoodsList } from './mockData/hebeiProvince/index';
import { heiLongJiangFoodsList } from './mockData/heilongjiangProvince/index';
import { heNanFoodsList } from './mockData/henanProvince/index';
import { hongKongFoodsList } from './mockData/hongKong/index';
import { huBeiFoodsList } from './mockData/hubeiProvince/index';
import { huNanFoodsList } from './mockData/hunanProvince/index';
import { innerMongoliaFoodsList } from './mockData/innerMongolia/index';
import { jiangSuFoodsList } from './mockData/jiangsuProvince/index';
import { jiangXiFoodsList } from './mockData/jiangxiProvince/index';
import { jiLinFoodsList } from './mockData/jilinProvince/index';
import { liaoNingFoodsList } from './mockData/liaoningProvince/index';
import { ningXiaFoodsList } from './mockData/ningxia/index';
import { qingHaiFoodsList } from './mockData/qinghaiProvince/index';
import { shaanXiFoodsList } from './mockData/shaanxiProvince/index';
import { shanDongFoodsList } from './mockData/shandongProvince/index';
import { shangHaiFoodsList } from './mockData/shanghai/index';
import { shanXiFoodsList } from './mockData/shanxiProvince/index';
import { siChuanFoodsList } from './mockData/sichuanProvince/index';
import { taiWanFoodsList } from './mockData/taiwanProvince/index';
import { tianJinFoodsList } from './mockData/tianjin/index';
import { tibetFoodsList } from './mockData/tibet/index';
import { xinJiangFoodsList } from './mockData/xinjiang/index';
import { yunNanFoodsList } from './mockData/yunnanProvince/index';
import { zheJiangFoodsList } from './mockData/zhejiangProvince/index';
import { othersFoodsList } from './mockData/others/others';
import { configDataList } from './config';
import { chinaAreaEastProvinceSouthLineFirst } from '/@/common/chinaEveryAreaData';
// import { handleNames } from '/@/utils/general';
// 中国菜品 数据集-数组对象形式
export const chinaTableData = {
  anHui: anHuiFoodsList,
  aoMen: aoMenFoodsList,
  beiJing: beiJingFoodsList,
  chongQing: chongQingFoodsList,
  fuJian: fuJianFoodsList,
  ganSu: ganSuFoodsList,
  guangDong: guangDongFoodsList,
  guangXi: guangXiFoodsList,
  guiZhou: guiZhouFoodsList,
  haiNan: haiNanFoodsList,
  heBei: heBeiFoodsList,
  heiLongJiang: heiLongJiangFoodsList,
  heNan: heNanFoodsList,
  hongKong: hongKongFoodsList,
  huBei: huBeiFoodsList,
  huNan: huNanFoodsList,
  innerMongolia: innerMongoliaFoodsList,
  jiangSu: jiangSuFoodsList,
  jiangXi: jiangXiFoodsList,
  jiLin: jiLinFoodsList,
  liaoNing: liaoNingFoodsList,
  ningXia: ningXiaFoodsList,
  qingHai: qingHaiFoodsList,
  shaanXi: shaanXiFoodsList,
  shangDong: shanDongFoodsList,
  shangHai: shangHaiFoodsList,
  shanXi: shanXiFoodsList,
  siChuan: siChuanFoodsList,
  taiWan: taiWanFoodsList,
  tianJin: tianJinFoodsList,
  tibet: tibetFoodsList,
  xinJiang: xinJiangFoodsList,
  yunNan: yunNanFoodsList,
  zheJiang: zheJiangFoodsList,
  others: othersFoodsList,
};
// 中国菜品 数据集-数组形式
export const fffoodsList = [].concat(
  anHuiFoodsList,
  aoMenFoodsList,
  beiJingFoodsList,
  chongQingFoodsList,
  fuJianFoodsList,
  ganSuFoodsList,
  guangDongFoodsList,
  guangXiFoodsList,
  guiZhouFoodsList,
  haiNanFoodsList,
  heBeiFoodsList,
  heiLongJiangFoodsList,
  heNanFoodsList,
  hongKongFoodsList,
  huBeiFoodsList,
  huNanFoodsList,
  innerMongoliaFoodsList,
  jiangSuFoodsList,
  jiangXiFoodsList,
  jiLinFoodsList,
  liaoNingFoodsList,
  ningXiaFoodsList,
  qingHaiFoodsList,
  shaanXiFoodsList,
  shanDongFoodsList,
  shangHaiFoodsList,
  shanXiFoodsList,
  siChuanFoodsList,
  taiWanFoodsList,
  tianJinFoodsList,
  tibetFoodsList,
  xinJiangFoodsList,
  yunNanFoodsList,
  zheJiangFoodsList,
  othersFoodsList,
);
// 获取所有的省份
const chinaKeys = Object.keys(chinaTableData);
export const allname = fffoodsList.map((item) => item['foodName']) || [];

// console.log('所有菜名：', allname);
// handleNames(chinaTableData);
// 每次添加新菜品-去重，并输出
const repeatData = [];
unipFunc([].concat(allname, configDataList));
console.log(
  '新发现数据处理后的结果集',
  configDataList.filter((name: any) => !repeatData.includes(name)),
);
console.log('useCopyToClipboard', Array.from(new Set(allname)));
// 获取所有省份的数据长度并做排序，从大到小
export const chinaKeysArr = [] as any;
chinaKeys.map((item) => {
  // console.log(item, chinaTableData[item].length);
  chinaKeysArr.push({ name: item, length: chinaTableData[item].length });
});
chinaKeysArr.sort((a: any, b: any) => {
  // console.log('排序', a, b);
  return a.length - b.length;
});
// keys.sort((a, b) => {
//   console.log('排序', a, b);
//   return chinaTableData[a] - chinaTableData[b];
// });
// const chinaSum = chinaKeysArr.reduce((prev, cur) => {
//   // console.log(prev, cur, index);
//   // console.log('----begin------' + cur.name + ': ' + cur.length + '-----end-----');
//   return prev + Number(cur.length);
// }, 0);
console.log('中国有：', fffoodsList.length, ' 道菜');
const chinaFoodsListByCity = fffoodsList.filter((item) =>
  chinaAreaEastProvinceSouthLineFirst.includes(item['city']),
);
console.log(
  '华东-南方路线-第一次打卡的城市集合-已删减有:',
  chinaFoodsListByCity.length,
  ' 道菜',
  chinaAreaEastProvinceSouthLineFirst.length,
  chinaAreaEastProvinceSouthLineFirst.length === 1 &&
    chinaFoodsListByCity.map((item) => item['foodName']),
);
