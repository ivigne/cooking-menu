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

// import { FoodsList } from './/';
// 中国主食 数据集-数组形式
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
export const staplesObj = {
  bun: bunFoodsList,
  cake: cakeFoodsList,
  dumpling: dumplingFoodsList,
  flatcake: flatcakeFoodsList,
  flour: flourFoodsList,
  gruel: gruelFoodsList,
  know: knowFoodsList,
  noodle: noodleFoodsList,
  pastry: pastryFoodsList,
  potHelmet: potHelmetFoodsList,
  rice: riceFoodsList,
  ricedumplings: ricedumplingsFoodsList,
  siumai: siumaiFoodsList,
  soup: soupFoodsList,
  soup1: soupFoodsList1,
};

export const staplesFoodNames = staplesList.map((item) => item['foodName']);
