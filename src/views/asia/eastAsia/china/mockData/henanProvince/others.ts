/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/henanProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 河南省-未知城市-特产美食
 * 冬瓜扇贝,南阳黄牛肉,壮馍,奶油螃蟹,姜汁热味鸡,孜然羊肉,山药牛肉卷,干锅豆衣,开封桶子鸡,开封灌汤包子,开花馍,戏萝卜煮鸡脆骨,扒广肚,扒素什锦,春笋猪尾煲,木鱼渡僧,汴京烤鸭,河南蒸饺,油旋,清汤鲍鱼,清炖狮子头,炒三鸟,炒山药泥,炙子骨头,炝鱿鱼卷,炸紫酥肉,烩三袋,烫面角,煎封豆腐汉堡,煎扒青鱼头尾,熏肚,牡丹燕菜,琉璃蛋球,生氽丸子,百花煎凤翼,盐煎丸子,糖醋软熘鱼焙面,糖醋金珀,羊双肠,老醋浸黄花鱼,肚丝汤,脆皮莲藕,芝麻香,芥末芥菜,芦笋百合,萝卜丝饼,葱扒羊肉,酸浆面条,酸辣乌鱼蛋汤,酸辣木樨汤,酿番茄,醋熘白菜,金丝万缕,金沙冬瓜条,雪菜腐衣球,韭头菜盒,韭香坚果兔肉,香椿烘蛋,香薰鹿肉串,香辣馋嘴鱼,高炉烧饼,鲇鱼炖羊排,鲜菇鱼片,鸡汁豆腐,鸡酱木瓜焗银雪鱼
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '河南省', // 省
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
