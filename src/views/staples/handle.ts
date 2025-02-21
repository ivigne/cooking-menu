import { flatcakeFoodsList } from './flatcake/flatcake';
import { flourFoodsList } from './flour/flour';
import { gruelFoodsList } from './gruel/gruel';
import { knowFoodsList } from './know/know';
import { noodleFoodsList } from './noodle/noodle';
import { pastryFoodsList } from './pastry/pastry';
import { riceFoodsList } from './rice/rice';
import { soupFoodsList } from './soup/soup';
import { cakeFoodsList } from './cake/cake';
import { siumaiFoodsList } from './siumai/siumai';
import { ricedumplingsFoodsList } from './ricedumplings/ricedumplings';
import { potHelmetFoodsList } from './potHelmet/potHelmet';
import { bunFoodsList } from './bun/bun';
import { dumplingFoodsList } from './dumpling/dumpling';
import { ref } from 'vue';
const staples = {
  soup: soupFoodsList,
  rice: riceFoodsList,
  bun: bunFoodsList,
  noodle: noodleFoodsList,
  dumpling: dumplingFoodsList,
  pastry: pastryFoodsList,
  cake: cakeFoodsList,
  siumai: siumaiFoodsList,
  ricedumplings: ricedumplingsFoodsList,
  potHelmet: potHelmetFoodsList,
  flour: flourFoodsList,
  gruel: gruelFoodsList,
  know: knowFoodsList,
  flatcake: flatcakeFoodsList,
};
export const names = ref<string[]>([]);
await Object.keys(staples).map((key) => {
  const name: string[] = [];
  staples[key].map((item) => {
    if (item.city === '') {
      name.push(item['foodName']);
      names.value.push(item['foodName']);
    }
  });
  console.log('分别是', key, name);
});
console.log('所有没有确定城市的食物', names.value);
