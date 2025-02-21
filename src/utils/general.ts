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
import { ref } from 'vue';
import pinyin from 'pinyin';
// 提取对象里子项为"数组对象中的某项为**的数据的XX，并返回一个数组"
export const handleNames = async (
  list: any,
  filterCode = 'city',
  filterName = 'foodName',
  filterKey = '',
  isAll = false,
) => {
  const result = ref<string[]>([]);
  await Object.keys(list).map(async (key) => {
    const value: string[] = [];
    await list[key].map((item) => {
      if (!isAll && item[filterCode] === filterKey) {
        value.push(item[filterName]);
        result.value.push(item[filterName]);
      } else {
        value.push(item[filterName]);
        result.value.push(item[filterName]);
      }
    });
    console.log('分别是', key, value);
  });
  return result.value;
};
// 提取数组对象中的某项为**的数据的XX，并返回一个数组
export const handleName = (
  list: any,
  filterCode = 'city',
  filterName = 'foodName',
  filterKey = '',
) => {
  const result = ref<string[]>([]);
  list.map((item) => {
    if (item[filterCode] === filterKey) {
      result.value.push(item[filterName]);
    }
  });
  return result.value;
};
// 数组对象进行分组
export const groupBy = async (arr: any, property = 'province') => {
  const result = await arr.reduce(function (cur, obj) {
    const key = hanziToPinyin(obj[property]);
    if (!cur[key]) {
      cur[key] = [];
    }
    cur[key].push(obj);
    return cur;
  }, {});
  return result;
};
// 数组对象进行分组-方法二
// const groupByCategory = products.groupByToMap(product => {
//   return product.category;
// });
// export const groupedObject = (arr: any, property = 'province') => {
//   return arr.groupBy((item) => {
//     return hanziToPinyin(item[property]);
//   });
// };

// 汉字转拼音,isSpace为true时，返回间隔拼音，否则返回连贯拼音
export const hanziToPinyin = (text: string, isSpace = false) => {
  const pinyinArray = pinyin(text, { style: pinyin.STYLE_NORMAL });
  if (isSpace) {
    return pinyinArray.flat().join(' ');
  }
  // console.log('pinyinArray：', pinyinArray.flat(), pinyinArray.flat().join(''));
  return pinyinArray.flat().join('');
};
// 判断字符是否为汉字，
export const isChinese = (s: string) => {
  return /[\u4e00-\u9fa5]/.test(s);
};
// 把字符串中的汉字转换成Unicode
export const ch2Unicdoe = (str: string) => {
  if (!str) {
    return;
  }
  let unicode = '';
  for (let i = 0; i < str.length; i++) {
    const temp = str.charAt(i);
    if (isChinese(temp)) {
      unicode += '\\u' + temp.charCodeAt(0).toString(16);
    } else {
      unicode += temp;
    }
  }
  return unicode;
};
// const str = 'love中国你好';
// console.info(ch2Unicdoe(str)); //  love\u4e2d\u56fd\u4f60\u597d
// 重复数据处理,仅仅支持数组
export const unipFunc = (arr: any) => {
  const newArr = [];
  arr.length > 0 &&
    arr?.forEach((item: never) => {
      if (arr.indexOf(item) !== arr.lastIndexOf(item) && newArr.indexOf(item) === -1) {
        newArr.push(item);
        return newArr;
      }
    });
  console.log('重复数据有：', newArr);
};

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
