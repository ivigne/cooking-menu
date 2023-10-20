/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-16 18:05:18
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/fujianProvince/xiamen.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 福建-厦门市-特产美食
 * 香菇肉酱、馅饼、鱼皮花生、菩提丸、青津果、龙宫水晶蚌、松子明虾、西施浣纱、彩蝶绕蟠龙、翡翠皇上皇、干炸鲟盖
 */
import { lampshadedBeefScriptsList } from './xiamenFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const xiamenFoodsList = [
  // 香菇肉酱
  // 馅饼
  // 鱼皮花生
  // 菩提丸
  // 青津果
  // 龙宫水晶蚌
  // 松子明虾
  // 西施浣纱
  // 彩蝶绕蟠龙
  // 翡翠皇上皇
  // 干炸鲟盖
  {
    province: '福建省', // 省
    city: '厦门市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'fujianCuisine', // 菜系编码
    cuisineCategoryName: '闽菜', // 所属菜系
    tasteCode: 'spicy', // 口味编码
    tasteName: '麻辣', // 口味名称
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
