/**
 * 台湾小吃
 * 台湾珍珠奶茶:
 * 珍珠奶茶以红茶和绿茶为基本的原料，里面再加入各种味道不同的蜜汁及放入叫“珍珠”的圆粒调味品，有冷热两种不同的食用方法，不仅非常解渴，味道也十分鲜美，是很方便的新潮饮料。
 * 珍珠茶不仅在口味上讲究，甚至讲究色感上的不同，最能吸引年轻的消费者。它们都有利用了材料的多种色彩，并加以调配，使其产生不同的视觉效果。
 * 另外，珍珠奶茶的另一个特点是它通过很大的吸管把里面的珍珠吸上来食用，一口咬下给人一种“QQ”的感觉。
 * 台湾蚵仔煎:
 * 它最早的名字叫"煎食追"，是台南安平地区一带的老一辈的人都知道的传统点心，是以加水后的番薯粉浆包裹蚵仔、猪肉、香菇等杂七杂八的食材所煎成的饼状物。
 * 台湾蚵仔煎做法提示：除了新鲜的蚵仔外，番薯粉也是使蚵仔煎美味的另一个重要关键。番薯粉的种类很多，但只有纯番薯粉才能调出香醇浓郁的粉浆。
 * 将粉浆以适当比例加水勾芡后，加入韭菜，做出的成品口感就能又黏又 Q，而且精纯的番薯粉也能巧妙地将肥美蚵仔的鲜味充分提升，做最完美的搭配。
 * 鸡蛋的选用也是一门学问，重视香味的店家会采用颜色深黄的土鸡蛋，冬天搭配茼篙、夏天搭配小白菜，并以能提香味的猪油来煎出美味的蚵仔煎，吃时再淋上以味噌、番茄酱、辣椒、酱油等熬成的酱汁即可。
 * 有了以上各种上等材料的搭配，让原本是贫民美食的蚵仔煎也变得精致美味了，那种甜中带咸、咸中带辣的缤纷滋味，口口都叫人回味无穷。
 * 台湾烤玉米:
 * ，也称为玉蜀黍，台湾话叫作“番麦”，是一种在全世界各地相当普遍的粮食作物。不管拿来蒸、煮、炒甚至做沙拉，都是相当对味。
 * 小时候也会在夜市里，甚至放学后听到摊贩叫着“烧番麦”的声音，吸引许多大家前往品尝，享受烧番麦的迷人滋味。
 * 首先将带有叶子的生玉米，放进特制的大桶，覆盖加热处理的小黑石，加水后闷熟玉米使玉米甜味锁住，过了数十分钟后，玉米就闷熟了。
 * 最后再将包覆玉米的叶子拿掉，将玉米放上特别订制的烤炉，以木炭取代瓦斯，烤个 3 到 5 分钟，再刷上独门配方的酱料，就是香气十足、富有玉米鲜味与嚼劲的珍珠烤玉米。
 * 还有：度小月担仔面、鳝鱼伊面、金爪米粉。
 */
import { lampshadedBeefScriptsList } from './taiwanFoodScriptContent/lampshadedBeef';
export const taiwanFoodsList = [
  // 金爪米粉
  {
    province: '台湾', // 省
    city: '', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '金爪米粉', // 美食名称
    foodName_en: 'goldenClawRiceVermicelli', // 美食英文名称
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
  // 度小月担仔面
  {
    province: '台湾', // 省
    city: '', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '度小月担仔面', // 美食名称
    foodName_en: 'danChaiNoodles', // 美食英文名称
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
  // 鳝鱼伊面
  {
    province: '台湾', // 省
    city: '', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '鳝鱼伊面', // 美食名称
    foodName_en: 'eelNoodles', // 美食英文名称
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
