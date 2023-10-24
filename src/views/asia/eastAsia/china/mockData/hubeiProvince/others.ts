/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hubeiProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 湖北省-未知城市-特产美食
 * 三鲜千张卷,二回头,元宝肉,八宝海参,千张肉,四季美汤包,大和鸡,大头菜肉丝,大河红鱼,太和鸡,小米年肉,岘山槎头鳊鱼,广水滑肉,恩施炕土豆,散烩八宝,梅花牛掌,武当猴头,氽鳡鱼,汉江鲌鱼类菜肴,油饼包烧麦,海参圆子,潜江油焖小龙虾,珊瑚桂鱼,珍珠果米酒,瓦罐鸡汤,百花莼菜,皮条鳝鱼荆沙菜,砂锅鱼糕鱼圆,糊汤米粉,糍粑鱼,红烧野鸭,红烧鮰鱼,腊肉炒菜薹,荆沙甲鱼,荆沙鱼糕,莲藕排骨汤,薇菜烩肉丝,虎皮蹄膀,蜜枣羊肉,襄阳牛肉面,谈炎记水饺,豆腐盒,郧阳三合汤,金牛千张皮,金银蛋饺,鸡茸笔架鱼肚,黄州东坡肉,黄陂三鲜,黄陂糖蒸肉
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '湖北省', // 省
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
