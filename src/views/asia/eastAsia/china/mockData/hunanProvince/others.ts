/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/hunanProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 湖南-未知城市-特产美食
 * 三下锅,三层套鸡,三角干子,东安子鸡,东安鸡,九嶷山兔,乾煎鸡油八宝饭,东安子鸡,五元神仙鸡,全家福,冠顶饺,冬瓜山香肠,剁辣椒,双色鱿鱼卷,发丝牛百页,吉首酸肉,唆螺,城步南山手工酸奶,城步油茶,大边炉,姊妹团子,子龙脱袍,宁远血鸭,宁远酿豆腐,岳阳姜辣蛇,干蒸湘莲,干锅牛肚,平江火焙鱼,平江香干,换心蛋糯米粽子,春卷,板栗烧菜心,枣子糕,栖凤渡鱼粉,桂花粑粑,梅菜扣肉,椒盐兔片,武冈米花,水煮鱼头,永州喝螺,汤鸭,油辣冬笋尖,浏阳茴饼,海参盆蒸,清汤柴把鸭,湘味方肉,湘西外婆菜,湘西酸肉,湘西鱼粉,湘黄鸡臭豆腐,炒素什锦,炒血鸭,炸八块,烩牛脑髓,烫面糖蒸饺,牛肉粉,猪油拌面,猪血丸子,猪血团子,珍珠烧卖,百鸟朝凤,皱纱馄饨,盐菜水晶包,穇子粑,米面发糕,糯米粽子,紫苏桃子姜,紫龙脱袍,红椒腊牛肉,红烧寒菌,红烧牛蹄筋,红烧龟肉,红煨鱼翅,组庵鱼翅,结麻花,绿豆沙,网油叉烧洞庭桂鱼,耒阳坛子菜,脑髓卷,腊味合蒸,腊肉,腊鱼,臭豆腐,芙蓉鲫鱼,芷江鸭,苗家乌米饭,荷叶包饭,萝卜丝饼,落口溶乔饼,薯丁粑粑,蝴蝶过河,衡阳鱼粉,豆腐干,走油豆豉扣肉,辣条,邵阳米粉,酸辣狗肉,酸辣百叶,长沙猪油拌粉,长沙麻仁,雕花蜜饯,雪花团子,霸王别姬,青椒炒肉,面包全鸭,面包鸡排,香酥鸭,马打滚,马蹄白果蛋花汤,鱼头豆腐,鲜鱼生菜汤,鸭脖子,麻仁奶糖,麻仁粑,麻仁酥鸭,麻辣仔鸡,龙脂猪血
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '湖南省', // 省
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
