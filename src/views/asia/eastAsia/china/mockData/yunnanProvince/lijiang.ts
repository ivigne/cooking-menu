/**
 * 云南-丽江市-特产美食
丽江粑粑
丽江粑粑分为甜咸两种口味，制作的主要原料是用丽江市出产的精细麦面，加注从玉龙雪山流下来的清泉揉成面团，在大理石石板上抹上植物油，再擀成一块块薄片，抹上化油，撒上火腿末或白糖后卷成圆筒状，两头搭拢按扁，中间包入芝麻、核桃仁等佐料，再以平底锅文火烤熟待煎成金黄色即可。 [36]
鸡豆凉粉
鸡豆是丽江市特有的一种豆类，产于丽江坝，属黄豆料，因其形状像鸡头部位的眼睛，用鸡豆做成的凉粉称作鸡豆凉粉。鸡豆凉粉分为凉吃和热吃两种吃法。夏季多凉吃，把凉粉切成片腌拌。热吃多在寒凉时节。 [65]
酥油茶
丽江市接壤于藏区，且属高海拔地区，盛产牦牛，故酥油茶也是丽江市的传统饮食。酥油茶是牦牛之乳提炼而成，除去奶渣，油脂凝固成饼。酥油茶是由酥油、砖茶、核桃仁、芝麻、麻籽、鸡蛋、精盐调制而成。烧沸茶水，用特制酥油桶搅打，最后成酥油茶。
酥油茶分为甜咸两种口味。是用酥油、鸡蛋、盐、麻籽、花生、核桃等，再加入煨好的茶叶水，盛在一种木制的细长的筒内，用一根木棍反复地搅拌，当地人又叫做打酥油茶。是丽江市很多民族的主要饮茶方式。
米灌肠
米灌肠在纳西语里称作“麻补”。是把大米或糯米蒸熟后，拌在新鲜猪血、蛋清及各种香料里，然后灌到洗净的猪大肠内，封好蒸熟而成。切成片可煎可蒸，贮藏时间较长，是一道纳西族传统美味，是丽江市的特有吃法。 [64]
特色饮食
鸡炖豆腐
吹猪肝
纳西火锅
野山药火腿鸡
腌酸鱼
烟熏鱼
苦荞粑粑
纳西饭谱
纳西汤谱
纳西茶谱
永胜油茶
土鸡米线
冰粉凉宵
丽江著名小吃，香甜可口。冰粉是特殊的小小的果实用纱布包了揉出来的半透明晶体,玫瑰糖是红糖和玫瑰花瓣做的,而小小的凉虾则是用米粉做的,制作的方法很特色,味道也是很特别。在四方街有卖，一元一份
丽江腊排骨火锅
丽江腊排骨火锅，是以腊排骨、粉条为原料制作的一道菜品，使用砂锅炖煮。
三川火腿
三川火腿产于云南省丽江市永胜县三川坝，凭借水土、气候条件以及民间流的独特工艺，经六十六道工序精心腌制而成。
茨满梨
茨满梨是全国梨类的四大名牌之一，因主产于丽江坝茨满村，故名。 丽江茨满梨果型端庄、皮薄肉脆、汁多味甜、富含维生素和果糖，是云南省梨类中的上品。茨满梨产地黄山茨满、长水、中济一带，离丽江城不过数里。春天，这里是一道香雪连海的风景。这一带每年都要举行一年一度的梨花节，一树梨花春带雨，踏歌起舞霁月中的民俗美景，使人陶醉；秋天，这里风过庭院、梨香阵阵；时近秋末，又是村坞红叶、斑斓无比；茨满梨花和茨满梨风景，都是丽江人生活永不凋谢的色彩。
牦牛火锅
牦牛火锅是指专用青藏高原牦牛肉为主料的一种具有非常鲜明青藏民族特色的火锅，牦牛火锅味道十足，嫩滑爽劲，有清汤原味，酱香味，还有麻辣味，特别香辣，老少介宜，营养丰富，在冬天是一道美味的佳肴。
丽江粑粑、酥油茶、鸡豆凉粉、永胜油茶、腊排骨、纳西烤鱼、米灌肠、黄豆面、丽江三文鱼、琵琶肉


*/
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const lijiangFoodsList = [
  // 灯影牛肉
  {
    province: '云南省', // 省
    city: '丽江市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'yunnanCuisine', // 菜系编码
    cuisineCategoryName: '滇菜', // 所属菜系
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
  },
  // 尖椒肥肠
  {
    province: '云南省', // 省
    city: '丽江市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'yunnanCuisine', // 菜系编码
    cuisineCategoryName: '滇菜', // 所属菜系
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
  },
];
