/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:31:36
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/anhuiProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 安徽-未知城市-特产美食
 * 三河酥鸭,三虾豆腐,五色绣球,全家福,凤炖牡丹,凤还巢,刀板香,吴王贡鹅,奶汁肥王鱼,徽州毛豆腐,徽州蒸鸡,无为熏鸭,李鸿章大杂烩,杨梅丸子,杨梅圆子,松鼠溜黄鱼,毛峰熏白鱼,毛峰熏鲥鱼,沙地鲫鱼,淮王鱼炖豆腐,清汤白玉饺,清蒸石鸡（即石蛙）,火煺烧边笋,火腿炖甲鱼,炒虾丝,炒鳝糊,王义兴烤鸭,砂锅鸭馄饨,红烧划水,红烧大烤,翡翠虾仁,胡氏一品锅,腌鲜臭鳜鱼,腌鲜鳜鱼（臭鳜鱼）,腐乳炸肉,荠菜圆子,荷叶粉蒸肉,银芽山鸡,问政山笋,问政笋,雪冬烧山鸡,雪映红梅,青螺炖鸭
 */

import { lampshadedBeefScriptsList } from './othersFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '安徽省', // 省
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
