/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-06-13 15:04:59
 * @FilePath: /cooking-menu/src/views/ancient/china/data.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
// import { ancientFoodsList } from './mockData/ancient';
import { unipFunc } from '/@/untils/general';
export const ancientFoodsList = [];
const foodNameList = ancientFoodsList?.map((item) => item['foodName']);
console.log('----------中国古代美食:', foodNameList);
// console.log('----------所有名字:', foodNames);

unipFunc(foodNameList);

// useCopyToClipboard(JSON.stringify());
