/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hainanProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 海南省-未知城市-特产美食
 * 临高乳猪,后安粉,抱罗粉,曲口海鲜,椰子船,椰子饭,椰子鸡,海南斋菜煲,海南椰子盅,海南火锅,海南煎饼,海南粉,海南鸡饭,清蒸和乐蟹,清补凉,白切文昌鸡,白斩加积鸭,白汁东山羊,竹筒饭,那大狗肉,陵水酸粉,隔水蒸鸡
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '海南省', // 省
    city: '达州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'qiongCuisine', // 菜系编码
    cuisineCategoryName: '琼菜', // 所属菜系
    tasteCode: 'spicy', // 口味编码
    tasteName: '麻辣', // 口味名称
    menuCategoryCode: '', // 菜品分类编码
    menuCategoryName: '', // 菜品分类名称，比如：早餐，米，面，饼，菜肴，酱，酒，醋等
    cookingTypeCode: 'multiple', // 烹饪类型编码
    cookingTypeName: '腌、晾、烘、蒸、炸、炒', // 烹饪类型名称
    featuresName: '薄如纸，色红亮，味麻辣鲜脆', // 特色、特点
    // 美食详情
    detail: {
      introduction: '', // 简介
      storyBackground: '', // 故事背景
      ingredients: '', // 原料
      // 制作过程
      productionProcess: [
        {
          stepDesc: '', // 步骤描述
        },
      ],
      // 营养价值
      nutritionalValue: [
        {
          stepDesc: '', // 步骤描述
        },
      ],
      // 食用功效
      edibleEffects: [
        {
          stepDesc: '', // 步骤描述
        },
      ],
      // 做法
      practiceList: [
        {
          way: '1', // 步骤名称
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
    isCookFlag: 0, // 是否已完成烹饪标记，0是否，1是完成
  },
];
