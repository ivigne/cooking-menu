/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/jilinProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 吉林省-未知城市-特产美食
 *  三鲜鹿茸羹,东北乱炖,东北宫保肉丁,东北宫保鸡丁东北,五香牛肉,什锦蛤蟆油,冰霜丸子,参芪酒鸡,双辣鱼片,吉利虾卷,地三鲜,大拉皮,大棒骨,大虾,孜然羊肉,孜然鸡心,宫保豆腐丁,小鸡炖榛蘑,小鸡炖蘑菇,尖椒干豆腐,扣肉,扣肘子,拌肉皮丝,拔丝橘子,拔丝葡萄,朝鲜族冷面,木须柿子,浇油鸡,浮油鸡片,清卤蚕蛹,滑熘肉片,滑熘里脊,炒辣子鸡,炖四白,炸冰棍,炸刺嫩芽,炸板山鸡,炸虾段,炸鸡卷,烤羊肉串,烧辣子鸡,烩酸辣干丝,熘肉段,熘肥肠,熘花胗,熘鱼片,爆煎鲤鱼,甩袖汤,番茄大虾,番茄肉片,番茄虾饼,番茄里脊,番茄鱼片,白扒猴头,白松大马哈鱼,白酥里脊,等数百种,糖醋瓦块鱼,红扒熊掌,红烧肉,红烧肘子,红烧鱼,红焖肉,红焖鸡块,羊肉冬瓜汤,美味鼻,肉丝掐菜,肉段,肉炒瓜片,胡辣鱼丝,花椒嫩醉鸡,芹菜炒牛肉,芹菜鱼丝,茄汁草鱼片,茅台鸡,葱扒鸡,葱烧兔肉,葱烧肉段,葱烧鱼米,葱烧鲤鱼,葱爆肉片,蒜瓣烧田鸡腿,蛋泡银鱼,蜜汁白梨,蜜焖三鲜,软炸里脊,软炸鱼,辣子肉丁,辣豆瓣鱼,酒香鸡,酱骨架,酸菜排骨,酸菜白菜猪肉炖粉条,酸辣兔肉,酸辣汤,酸辣肘子,酸辣酥肉,锅包肉,锅肉,雪衣银鱼,韭菜干丝,飞龙,飞龙汤,香辣肉丝,香辣鸡丝,香酥丸子,香酥鱼,香酥鸡,鱼腹藏羊肉,鲫鱼过河,鸡腿,鸡蛋汤,鸭腰烧口蘑,鸳鸯戏飞龙,麻酱紫鲍
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '吉林省', // 省
    city: '', // 市
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
