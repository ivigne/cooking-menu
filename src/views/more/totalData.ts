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
