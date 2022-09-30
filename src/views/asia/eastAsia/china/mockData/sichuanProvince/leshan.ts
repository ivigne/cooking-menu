/**
 * 四川-乐山市-特产美食
 * 特产：
 * 美食：
地标特产
地理标志保护产品
峨眉山茶
峨眉糕
苏稽米花糖
夹江书画纸
峨眉山矿泉水
峨边竹笋
五通桥豆腐乳
夹江叠鞘石斛
峨眉山雪魔芋
金口河川牛膝
犍为茉莉花茶
-
峨眉山竹叶青茶
金口河乌天麻
-
-
农产品地理标志产品
马边绿茶
犍为麻柳姜
峨眉山藤椒
沐川猕猴桃
峨边马铃薯
黑竹沟藤椒
西坝生姜
嘉州荔枝
（上表参考“中国地理标志产品保护网”名单 [23]  、“全国农产品地理标志查询系统”名单 [24]  ）
美食
豆腐脑
乐山豆腐脑是四川乐山特色风味小吃之一，豆花上有深红的辣椒配着翠绿香菜或芹菜，色香味俱全。
钵钵鸡
钵钵鸡，是源于四川乐山的汉族特色小吃，属于川菜系。此菜一听其名，就觉得很新奇，“钵钵”其实就是瓦罐，钵外面是画着红黄相间的瓷质龙纹，钵内盛放配以麻辣为主的佐料，菜品在特珠殊加工后用签串制，晾冷浸于各种口味的佐料中，食用时自取自食，除味道悠长外更添情趣盎然。
西坝豆腐
西坝豆腐是四川乐山的汉族传统名菜。西坝豆腐历史悠久，于东汉时期传入，精于唐宋时期，有文字可查，则兴盛于明朝万历（公元1573～1620）年间，距今已有400多年的历史。
甜皮鸭
乐山人称甜皮鸭为卤鸭子，沿用的是清朝御膳工艺。由民间发掘、改进，其卤水别具特色，具有色泽棕红、皮酥略甜、肉质细嫩、香气宜人的特点。
跷脚儿
作为乐山传统的地方美食，“跷脚儿”兴起于乐山市市中区杨湾乡周村（现长春村），有六百多年历史，因当时人们吃“路边摊”时，没有凳子可坐，只能将脚跷放在饭桌横杠上吃饭而得名。后来，“跷脚儿”衍生出牛杂牛肉一锅煮的另一种形式，这就是“牛肉汤锅”，其与“跷脚儿”的区别是食客自己在汤锅里煮烫牛杂牛肉等。
叶儿粑
“叶儿粑”是乐山的传统名小吃之一，因本地特有的粑叶包制而得名，在乐山有较长的发展历史 [25]  。
乐山玻璃烧卖
烧麦流行于全国，但是乐山的烧卖具有皮薄馅丰、造形美观、荤素兼备、营养丰富的特点。玻璃烧卖因其皮薄、熟制后皮料浸油呈半透明状，透过皮亦可见其馅。
牛华麻辣烫
牛华麻辣烫起源于岷江之滨乐山市五通桥区牛华镇。最初是船工和纤夫创造了麻辣烫这种简便易行而又独特的吃法，万物皆可烫。
 */
import { lampshadedBeefScriptsList } from './leshanFoodScriptContent/lampshadedBeef';
export const leshanFoodsList = [
  // 灯影牛肉
  {
    province: '四川省', // 省
    city: '乐山市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: 'lampshadedBeef', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'sichuanCuisine', // 菜系编码
    cuisineCategoryName: '川菜', // 所属菜系
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
          practiceName: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 尖椒肥肠
  {
    province: '四川省', // 省
    city: '乐山市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: 'lampshadedBeef', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'sichuanCuisine', // 菜系编码
    cuisineCategoryName: '川菜', // 所属菜系
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
          practiceName: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
];
