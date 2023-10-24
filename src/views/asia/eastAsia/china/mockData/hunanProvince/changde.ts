/**
 * 湖南-常德市-特产美食
 * 
 * 安乡多味鱼丸,常德酱板鸭,鸭霸王,北堤麻辣肉,常德米粉,津市牛肉粉,风味清真菜,原汁武陵水鱼,钵子菜,


 * 
 * 
安乡多味鱼丸
安乡鱼丸有多种制作方法，有用手工制作的，有用机械制作的。制作的鱼丸，有甜的、咸的、辣的。最近，安乡罐头厂在继承传统产品的基础上，又创制出了多味鱼丸，多味鱼丸博采国内众家之长，开创了国
常德酱板鸭
常德酱板鸭，湖南省常德市武陵区特产，中国国家地理标志产品。酱板鸭是常德富有浓郁地方特色的风味美食，它以其独特口味“香、辣、鲜、醇”，观之红光油亮、闻之酱香浓郁、尝之香辣爽口，且脂肪含量低，蛋白质含量高，享有“常德一绝”的美誉。常德酱板鸭1999年被评为湖南省首届农博会优质产品奖、2000年10月荣获首届中国西部粮酒副食展销会金奖、常德市首届食品工业博览会金奖、湖南省第二届名优特新农副产品博览会银奖等各项荣誉。2013年07月12日，原国家质检总局批准对“常德酱板鸭”实施地理标志产品保护。
鸭霸王
鸭霸王是湖南常德著名的小吃，属于湘菜系。由江南卤腊世家第八代传人采用祖传秘方和传统工艺，结合现代科学配方，配以30多种名贵中草药精心密制而成，是最著特色的名小吃之一。鸭霸王口味独特；鸭霸
北堤麻辣肉
北堤麻辣肉是一道以大豆为主要原料的菜品。
常德米粉
常德米粉是湖南省常德市的一道传统风味小吃，属于湘菜系；米粉历史悠久，闻名三湘。到常德一定要尝一尝。常德米粉的主要原料是大米，早籼米经过十几小时水浸，打浆，加热定型特殊工艺制成洁白、混圆、细长且有弹性的粉条，只要用开水烫热，加上作料后即可食用，吃起来润滑可口、风味独具特色。2016年，“常德米粉制作技艺”被列入第四批“湖南省非物质文化遗产代表性项目名录”。
津市牛肉粉
”津市牛肉粉“是湖南省最有名的特色小吃，制作原料主要有山楂、枙子、灵香草等。作为地方特产，也能成为人们常食用的食品，味道鲜美，香滑不油，吃起来润滑可口、风味独具。
风味清真菜
位于沅水河畔的常德市，其清真菜肴久负盛誉，闻名遐迩。相传清代乾隆皇帝游江南时，路经常德，进一回民店品尝了厨师烹制的清真菜肴，赞不绝口，当即挥毫赐名该店为\"清真第一春\"。
原汁武陵水鱼
原汁武陵水鱼是一道色香味俱全的传统名菜，属于湘菜系。原汁武陵水鱼以五花肉为主要材料,烹饪以为主。选用湖南常德县武陵镇一带所产水鱼。此菜酥烂浓香，原汁原味，芡亮汁浓，鲜美可口。
钵子菜
钵子菜又称炖钵炉子菜、炖钵菜、 火锅，是湖南省传统的名菜，属于湘菜系。它和北方的涮锅、四川火锅、砂锅同出一脉，它们的共同特点是用火烧锅，以水（汤）导热，煮（涮）食物。
*/
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const changdeFoodsList = [
  // 灯影牛肉
  {
    province: '四川省', // 省
    city: '常德市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'hunanCuisine', // 菜系编码
    cuisineCategoryName: '湘菜', // 所属菜系
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
    province: '四川省', // 省
    city: '常德市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'hunanCuisine', // 菜系编码
    cuisineCategoryName: '湘菜', // 所属菜系
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
