/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-05-28 16:41:00
 * @FilePath: /cooking-menu/src/utils/general.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 常规公共方法抽取
 */

// 将字符串分隔符(中文逗号，回车)统一替换成英文分隔符，并转成为数组
export const replaceAndSplitStr = (value: any) => {
  return value.replace(/、/g, '').replace(/，/g, '').replace(/\n/g, '').split(',');
};
// 将数组转成为“英文分隔符”的字符串
export const joinStr = (value: any) => {
  return value
    .filter((i) => i)
    .map((j) => j?.trim())
    .join(',');
};
