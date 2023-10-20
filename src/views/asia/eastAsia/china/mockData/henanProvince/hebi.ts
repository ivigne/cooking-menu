/**
 * 河南-鹤壁市-特产美食
 * 
 * 浚县子馍
榆皮饸饹面
吴二锅花生米

浚县八大碗
王桥豆腐皮

角场营元宵

 * 
浚县子馍
也叫作石子馍，因在鹅卵石上烘焙制成而得名，距今已有一千多年的历史。子馍采用的都是上等面粉，配上油、葱花等制成火烧，然后再加入肉丝放到烧得滚烫的鹅卵石上面炕熟，最后浇入鸡蛋烤熟即可。油酥咸香的火烧，配上丝丝嫩滑的鸡蛋和肉丝，吃上去外焦里嫩。
榆皮饸饹面
按一定比例在荞麦面里掺上小米面和榆皮面，是浚县吴庄饸饹面的独特之处。制作时先把榆皮磨成面粉状，加上荞面或白面和匀，然后用木饸饹床榨压，面随孔出，作细条落入水中，煮熟。捞出来再过一遍冷水，盛入碗中，根据个人口味放入葱花、油、盐、味精、蒜汁、香油、芥末油、辣椒、豆芽。
吴二锅花生米
浚县传统名吃，它始于清代中后期，距今已有二百多年。吴二锅花生米产于黎阳镇寺下头村，系吴好田三代祖传，选用本地大花生及名贵中药，传统生产工艺是先将花生籽用八大料水浸泡腌制，然后捞出晾干，在大铁锅中加入黄河故道的细沙与花生籽同加热翻炒，火候要适中，翻搅按同一个方向，直到花生籽在热沙中如漂浮，里熟皮不脱，晾干后食用。1983年曾参加广州交易会。

浚县八大碗
在浚县，但凡婚丧嫁娶或是招待尊贵客人，多以八大碗宴客。八仙桌上，十个盘、八个碗、两个汤，好吃又好看。八大碗在当时集中了扒、焖、酱、烧、炖、炒、蒸、熘等烹饪技法。浚县流传许久的八大碗是沿袭满族口味，并结合汉人饮食习惯传承下来。八大碗主要包括四荤四素。四荤以猪肉为主，精选肘子肉，后臀肉，分为腐乳肉、小酥肉、扣肉、方肉；四素以皮渣、海带、粉条、豆腐为主，经过独特的工艺制作而成。
王桥豆腐皮
素有“豆腐之乡”的浚县王桥村，早因其制作的豆腐声名鹊起。其豆腐皮的制作更堪称一绝，“四十多斤豆子，仅挑出七八张豆腐皮”，挑制的豆腐皮又薄又筋道，吃起来满口留香，豆味儿十足，成为凉拌菜中的一道佳肴。

角场营元宵
亦称汤元，浚县"汤元之乡"的角场营生产的元宵有300多年的制作历史。该村元宵的特点是：个大均匀，皮薄馅多，色泽雪白，起绒头，汤清团糯，味道鲜美，吃到嘴里，松软细腻，香甜可口。每年秋后，外出卖汤元者远至徐州、太原、南京、西安；近至郑州、开封、洛阳、许昌等地。

 */
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const hebiFoodsList = [
  // 灯影牛肉
  {
    province: '河南省', // 省
    city: '鹤壁市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
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
    isCookFlag: 0, // 是否已完成烹饪标记，0是否，1是完成
  },
  // 尖椒肥肠
  {
    province: '河南省', // 省
    city: '鹤壁市', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
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
    isCookFlag: 0, // 是否已完成烹饪标记，0是否，1是完成
  },
];
