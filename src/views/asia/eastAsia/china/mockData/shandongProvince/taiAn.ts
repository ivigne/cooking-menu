/**
 * 山东-泰安市-特产美食
 * 
 * 
* 泰安三美,泰山火烧,泰山煎饼,蜜三刀,糁（sa）汤,

 * 
 * 
 * 
 * 
 * 
泰安三美
泰安风味名菜。泰安产的白菜、豆腐和泰山泉水，历来被誉为“泰安三美”。泰安白菜个儿大心实，质细无筋；泰安豆腐，浆细质纯，嫩而不老；泰山泉水，清甜爽口，杂质少。李白于唐开元二十四年（736年）由湖北安陆迁来济南后，以及杜甫客居山东时，他们都曾多次上泰山，并品尝“泰安三美”菜肴之风味。“游山不来品三美，泰山风光没赏全”，这是当地长期流传的赞誉三美菜肴的佳话。
泰山火烧
泰山名吃的标志性产品，在2011年入选山东省非物质文化遗产保护名录。泰山驴油火烧制作工艺独特而复杂。制作材料有驴油、面粉、酵母、老面、芝麻、佐料等。泰山驴油火烧的制作包括熬制驴油、和面、醒面、面饼制作、加佐料，内烤与外烤等步骤。驴油的熬制就要用时一个多小时，整个制作过程用时三四个小时。 [8]
泰山煎饼
泰安特色的食品之一，泰安有着1000多年摊制煎饼的历史。制作程序虽不复杂，但所需材料都有着明确的比例。新出炉的煎饼，吃起来清香酥脆，略带酸味。泰山的煎饼与山东其它地方不同，加工前多了一道发酵的工序，所以泰山煎饼吃起来略带酸味。 [9]
蜜三刀
在泰安人的童年记忆里，蜜三刀是深受泰安市民喜爱的一道传统甜点。蜜三刀的制作工艺，不仅要先油炸，还要在浓浓的糖浆里浸泡，裹上满满的"蜜汁"。做这样一道甜点，工序较多，前期要用几个小时和面，制作过程用时近两个小时。蜜三刀是一种费时费力又费心思的甜点，制作者对面料的制作、糖浆的调配以及火候的把握都必须熟悉，每一步的制作都很关键。 [10]
糁（sa）汤
又名"肉粥"，是一种传统名吃，据记载已有2400多年的历史。《说苑·杂言》中就有"七日不食，藜羹不糁"的记载，春秋时代的名著《墨子非儒下》有："孔子穷于陈蔡，藜羹不糁"之说。《礼记·内则》称："糁，取牛、羊之肉，三如一，小切之。与稻米二，肉一，合以为饵，煎之。"这里所说的"糁"则颇类今糁。清康熙年间《沂州志·秩》所列16种品中有"糁食"。相传糁是古代西域人的早餐饮料，唐朝传入内地。 [11]
 */
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const taiAnFoodsList = [
  // 灯影牛肉
  {
    province: '山东省', // 省
    city: '泰安市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'shangdongCuisine', // 菜系编码
    cuisineCategoryName: '鲁菜', // 所属菜系
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
  // 尖椒肥肠
  {
    province: '山东省', // 省
    city: '泰安市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'shangdongCuisine', // 菜系编码
    cuisineCategoryName: '鲁菜', // 所属菜系
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
