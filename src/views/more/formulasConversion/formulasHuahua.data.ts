/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-07-12 11:50:38
 * @FilePath: /cooking-menu/src/views/more/formulasConversion/formulasHuahua.data.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 主食-配方换算-花花厨房历险记配方
 */

// import { lampshadedBeefScriptsList } from './riceFoodScriptContent/lampshadedBeef';
const ar = [
  '主材',
  '花椒',
  '胡椒掺合粉(1:1)',
  '醋',
  '酱油',
  '辣椒油',
  '蒜水各一勺',
  '白芝麻',
  '味精',
  '鸡精适量',
];
const list = {
  title: '',
  remark: null,
  starLevel: 1,
};
ar.map((item, i) => {
  list['itemName' + i] = item;
  list['itemVal' + i] = i;
  list['itemUnit' + i] = null;
});
console.log('花花配方换算', list);
export const formulasFoodsLisHuahua = [
  {
    title: '素颜水',
    remark: null,
    starLevel: 1,
    itemName0: '主材',
    itemVal0: 1,
    itemUnit0: null,
    itemName1: '苹果',
    itemVal1: null,
    itemUnit1: '半个',
    itemName2: '红枣',
    itemVal2: 4,
    itemUnit2: '颗',
    itemName3: '黄芪',
    itemVal3: 5,
    itemUnit3: '片',
    itemName4: '当归',
    itemVal4: 1,
    itemUnit4: '片',
    itemName5: '党参',
    itemVal5: 1,
    itemUnit5: '小段',
    itemName6: '红枸杞',
    itemVal6: 10,
    itemUnit6: '颗',
    itemName7: '无花果',
    itemVal7: 5,
    itemUnit7: '颗',
    itemName8: '黑枸杞',
    itemVal8: 5,
    itemUnit8: null,
    itemName9: '桑葚',
    itemVal9: 10,
    itemUnit9: null,
    itemName10: '水',
    itemVal10: 1000,
    itemUnit10: 'ml',
  },
];
console.log(`花花厨房历险记配方共有${formulasFoodsLisHuahua.length}个`);
