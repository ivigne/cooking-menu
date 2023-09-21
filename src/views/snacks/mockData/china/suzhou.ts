/**
 * 苏州小吃
 * 廖排骨的五香排骨、升美斋的鸡鸭血汤、小有天的藕粉圆子、炸酥豆糖粥等，此外还有千张包子、观振兴面馆的各种苏式面条、净素菜包子等等；
 * 此外还有供人们茶余酒后闲吃的品种：盐金花菜、腌黄连头、去皮油氽果玉、油氽黄豆、酱螺蛳、油氽臭豆腐、油氽粢饭糕、烘山芋、油三角粽等，
 * 均是价廉物美，具有浓郁江南风味的小吃。代表有:
 * （1）梅花糕/海棠糕；（2）糍饭团；（3）萝卜丝饼；（4）三角包；（5）虾籽鱼；（6）玫瑰瓜子；（7）陆长兴香姑面；（8）朱鸿兴闷肉面；
 * （9）松鹤楼卤鸭面；（10）担子糖粥、八宝粥；（11）蜜汁豆腐干；（12）松仁粽子糖；（13）藏书羊肉；（14）黄天源糕团、猪油咸糕；
 * （15）震源生煎、哑巴生煎、山塘黄天源生煎；（16）义昌福包子、南园包子；（17）绿扬馄饨、绿扬蟹黄小笼包；（18）枣泥麻饼；（19）茉莉花茶、碧螺春茶；
 * （20）桂花酒酿；（21）陆稿荐酱汁肉（始与康熙年间唯一老字号以“陆稿荐”为注册商标的）；（22）一品香卤姑苏小吃名堂多，味道香甜软酥糯。
 * 生煎馒头蟹壳黄，老虎脚爪绞连棒。千层饼、蛋石衣，大饼油条豆腐桨。葱油花卷葱油饼，经济实惠都欣赏。香菇菜包豆沙包，小笼馒头肉馒头。
 * 六宜楼去买紧酵，油里一氽当心咬。茶叶蛋、焐熟藕，大小馄饨加汤包。高脚馒头搭姜饼，价钿便宜肚皮饱。芝麻糊、糖芋艿，油氽散子白糖饺。
 * 鸡鸭血汤豆腐花，春卷烧卖八宝饭。糯米粢饭有夹心，各色浇头自己挑。锅贴水饺香喷喷，桂花藕彩海棠糕。臭豆腐干粢饭团，萝卜丝饼三角包。
 * 蜜糕方糕条头糕，猪油年糕糖年糕。汤团麻团粢毛团，双酿团子南瓜团。酒酿园子甜酒酿，定胜糕来梅花糕。笃笃笃笃卖糖粥，小囡吃仔勿想跑。
 * 赤豆粽子有营养，肉粽咸鲜味道好。鸡头米、莲子羹，糖炒栗子桂花香。枣泥麻饼是特产，卤汁豆干名气响。
 */
import { lampshadedBeefScriptsList } from './suzhouFoodScriptContent/lampshadedBeef';
export const suzhouFoodsList = [
  // 盐金花菜
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '盐金花菜', // 美食名称
    foodName_en: 'saltedGoldenCauliflower', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 腌黄连头
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '腌黄连头', // 美食名称
    foodName_en: 'pickledYellowDock', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 去皮油氽果玉
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '去皮油氽果玉', // 美食名称
    foodName_en: 'oilBlanchedFruitJade', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 油氽黄豆
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '油氽黄豆', // 美食名称
    foodName_en: 'oilBlanchedSoybean', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 酱螺蛳
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '酱螺蛳', // 美食名称
    foodName_en: 'sauceSnail', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 油氽臭豆腐
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '油氽臭豆腐', // 美食名称
    foodName_en: 'oilBlanchedStinkyTofu', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 油氽粢饭糕
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '油氽粢饭糕', // 美食名称
    foodName_en: 'oilBlanchedStickyRiceCake', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 烘山芋
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '烘山芋', // 美食名称
    foodName_en: 'bakedYam,', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 油三角粽
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '油三角粽', // 美食名称
    foodName_en: 'oilTriangularRiceDumplings', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 千张包子
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '千张包子', // 美食名称
    foodName_en: 'thousandSheetsBuns', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 五香排骨
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '五香排骨', // 美食名称
    foodName_en: 'fiveSpiceSpareRibs', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 鸡鸭血汤
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '鸡鸭血汤', // 美食名称
    foodName_en: 'chickenDuckBloodSoup', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 藕粉圆子
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '藕粉圆子', // 美食名称
    foodName_en: 'lotusFlourDumplings,', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 炸酥豆糖粥
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '炸酥豆糖粥', // 美食名称
    foodName_en: 'deepFriedCrispyBeansSugarCongee,', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 梅花糕/海棠糕
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '海棠糕', // 美食名称
    foodName_en: 'begoniaCake', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 糍饭团
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '糍饭团', // 美食名称
    foodName_en: 'pattyRiceDumplings', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 萝卜丝饼
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '萝卜丝饼', // 美食名称
    foodName_en: 'shreddedRadishCake', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 三角包
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '三角包', // 美食名称
    foodName_en: 'triangularBuns', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 虾籽鱼
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '虾籽鱼', // 美食名称
    foodName_en: 'shrimpRoeFish', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 玫瑰瓜子
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '玫瑰瓜子', // 美食名称
    foodName_en: 'roseMelonSeeds', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 陆长兴香姑面
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '香姑面', // 美食名称
    foodName_en: 'shiangKooNoodles;', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 朱鸿兴闷肉面
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '闷肉面', // 美食名称
    foodName_en: 'suffocatingNoodles', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 松鹤楼卤鸭面
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '松鹤楼卤鸭面', // 美食名称
    foodName_en: 'marinatedDuckNoodles', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 担子糖粥、八宝粥
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '担子糖粥', // 美食名称
    foodName_en: 'danziSugarPorridge', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 蜜汁豆腐干
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '蜜汁豆腐干', // 美食名称
    foodName_en: 'honeySauceDriedBeanCurd', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 松仁粽子糖
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '松仁粽子糖', // 美食名称
    foodName_en: 'pineNutsDumplingCandy', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 藏书羊肉
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '藏书羊肉', // 美食名称
    foodName_en: 'zangshuMutton;', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 猪油咸糕
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '猪油咸糕', // 美食名称
    foodName_en: 'lardSaltedCake', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 枣泥麻饼
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '枣泥麻饼', // 美食名称
    foodName_en: 'jujubePasteSesameCake', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 桂花酒酿
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '桂花酒酿', // 美食名称
    foodName_en: 'osmanthusWineBrew', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 陆稿荐酱汁肉
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '陆稿荐酱汁肉', // 美食名称
    foodName_en: 'luScriptRecommendedMeat', // 美食英文名称
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
          practiceDesc: '1', // 做法详情介绍
        },
      ],
    },
    shootingStatus: 0, // 拍摄状态
    scripts: lampshadedBeefScriptsList,
    remark: '', // 备注
    tags: null, // 标签
  },
  // 一品香卤姑
  {
    province: '江苏省', // 省
    city: '苏州市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '一品香卤姑', // 美食名称
    foodName_en: 'yipinxiangBrine ', // 美食英文名称
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
