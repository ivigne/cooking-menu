/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-07-12 11:50:38
 * @FilePath: /cooking-menu/src/views/more/formulasConversion/formulasSuibian.data.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 主食-配方换算-隋卞做配方
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
console.log('隋卞做配方换算', list);
export const formulasFoodsListSuibian = [];
console.log(`隋卞做配方共有${formulasFoodsListSuibian.length}个`);
