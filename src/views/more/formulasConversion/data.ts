/**
 * 主食-配方换算
 */
import { FormSchema } from '/@/components/Form';
import { formulasFoodsListNormal } from './formulas.data';
import { formulasFoodsListDipping } from './formulasDipping.data';
import { formulasFoodsListMarinade } from './formulasMarinade.data';
import { formulasFoodsListSuibian } from './formulasSuibian.data';
import { formulasFoodsLisHuahua } from './formulasHuahua.data';
export const formulasFoods = {
  normal: formulasFoodsListNormal,
  dipping: formulasFoodsListDipping,
  marinade: formulasFoodsListMarinade,
  huahua: formulasFoodsLisHuahua,
  suibian: formulasFoodsListSuibian,
};
const ar = [
  ['normal', '常规配方'],
  ['dipping', '蘸碟、蘸水、蘸料配方'],
  ['marinade', '卤味、卤水配方'],
  ['huahua', '花花厨房历险记配方'],
  ['suibian', '隋卞做配方'],
];
const list = [] as any;
ar?.map((item) => {
  list.push({
    value: item[0],
    label: item[1],
  });
});
export const options = list;
console.log(ar, typeof ar, options);
export const schemas: FormSchema[] = [
  {
    field: 'formulasType',
    label: '配方类型：',
    component: 'Select',
    rules: [{ required: true, message: '请选择' }],
    defaultValue: 'normal',
    componentProps: () => {
      return {
        options: options,
        // showSearch: true,
        // optionFilterProp: 'label',
      };
    },
  },
  {
    field: 'formulasName',
    label: '配方名称：',
    component: 'Input',
    defaultValue: '辣',
  },
];

const demo = {
  title: 'demo',
  remark: null,
  starLevel: 3,
  itemName0: '主材',
  itemVal0: 500,
  itemUnit0: '克',
  itemName1: '姜',
  itemVal1: 1,
  itemUnit1: '块',
  itemName2: '大葱',
  itemVal2: 1,
  itemUnit2: '根',
  itemName3: '蒜',
  itemVal3: 3,
  itemUnit3: '瓣',
  itemName4: '草果',
  itemVal4: 2,
  itemUnit4: '颗',
  itemName5: '桂皮',
  itemVal5: 1,
  itemUnit5: '根(约中指大小)',
  itemName6: '香叶',
  itemVal6: 2,
  itemUnit6: '片',
  itemName7: '干红辣椒',
  itemVal7: 3,
  itemUnit7: '根',
  itemName8: '料酒',
  itemVal8: 30,
  itemUnit8: 'ml(2汤匙)',
  itemName9: '生抽',
  itemVal9: 30,
  itemUnit9: 'ml(2汤匙)',
  itemName10: '老抽',
  itemVal10: 45,
  itemUnit10: 'ml(2汤匙)',
  itemName11: '白糖',
  itemVal11: 5,
  itemUnit11: '克(g/1茶匙)',
  itemName12: '冰糖',
  itemVal12: 30,
  itemUnit12: '克(g/1小把)',
  itemName13: '盐',
  itemVal13: 5,
  itemUnit13: '克(g/1茶匙)',
  keys: [],
  calcFactor: 1,
};

console.log(typeof demo);
