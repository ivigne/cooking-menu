/**
 * 河南-三门峡市-特产美食
 * 
* 大刀面,水花佛手糖糕,观音堂牛肉,脂油烧饼,糟蛋,麻花,石头饼,


 * 
 * 
大刀面
大刀面又称长寿面，其名字的来源是因为切面的刀大得出奇，所以称为大刀面。大刀面起源于宋朝，发源于盛产小麦的兰考县小宋乡，相传清朝乾隆皇帝过生日、慈禧太后祝寿，大刀面都曾作为长寿面进贡。2009年被开封市人民政府公布为开封市非物质文化遗产保护名录。
水花佛手糖糕
水花佛手糖糕是中国河南省三门峡市的一种传统名吃，被誉为豫西一绝，其造型别致，焦酥适口，香而不腻，风味别致，深受人民欢迎，糖糕焦酥香软，充溢着一股玫瑰的芳香。
观音堂牛肉
观音堂五香牛是河南三门峡陕州区的特色传统名小吃。据说在1901年，慈禧太后过道陕州区，食用观音堂五香牛肉后赞不绝口，将其列为贡品。它的制作方法也多种多样，厨师一般这样制作：将宰杀后的牛肉剔净骨头，分割成每块数十斤的大块，在加有大半缸水的缸中，放进适量的盐、火硝进行腌制（冬季可腌制数月，夏季一般三天，春秋季节一星期左右）。
脂油烧饼
脂油烧饼又叫脂油饼，是河南省三门峡市灵宝市的一种传统小吃，该菜品呈扁圆形，旋纹相套，外观焦黄明亮，咬开后层次分明，每层薄如纸，外酥内软，浓香扑鼻。
糟蛋
糟蛋是新鲜鸭蛋（或鸡蛋）用优质糯米糟制而成，是中国别具一格的特色传统美食，以浙江平湖糟蛋、陕州糟蛋和四川宜宾糟蛋最为著名。因为经过糟渍后，蛋壳脱落，只有一层薄膜包住蛋体，其蛋白呈乳白色，蛋黄为橘红色，味道鲜美，只要用筷或叉轻轻拨破软壳就可食用。
麻花
麻花，是中国的一种特色油炸面食小吃。传说是东汉人柴文进发明了麻花。现主产于陕西省咸阳、山西稷山、湖北崇阳、天津、湖南。其中天津以生产大麻花出名，山西稷山以咸香油酥出名，苏杭以原始工艺出名，湖北崇阳以小麻花出名，天津以大麻花出名。另有天津十八街麻花、河南汝阳县麻花、江苏藕粉麻花、河南宁平麻花、湖南新化赵氏麻花各具特色。作法是以两三股条状的面拧在一起，油炸而成。在中国北方地区，立夏时节有吃麻花的古老习俗。
石头饼
石头饼是流行于山西，陕西地区的一种传统面食，中国传统的烙制食品。石头饼又称石子馍，唐朝时称石鏊饼，明清朝称天然饼。
 */
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const sanmenxiaFoodsList = [
  // 灯影牛肉
  {
    province: '河南省', // 省
    city: '三门峡市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'henanCuisine', // 菜系编码
    cuisineCategoryName: '豫菜', // 所属菜系
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
    province: '河南省', // 省
    city: '三门峡市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'henanCuisine', // 菜系编码
    cuisineCategoryName: '豫菜', // 所属菜系
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
