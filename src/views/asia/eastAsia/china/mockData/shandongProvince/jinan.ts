/**
 * 山东-济南市-特产美食
济南是八大菜系的鲁菜发祥地，历来传承有序。
饮食文化
名称
介绍
泉城大包
选料精细，做工考究，配料丰富有特色，而且味道醇厚，花色品种多。泉城大包97年起就获"中华名小吃"奖。
名士多烤全羊
泉城“十大名吃之一”，清朝末期即名声大起。选梁山1岁青山羊，以祖传秘方烤制，保持原汁原味，色香味俱佳。
黄家烤肉
济南名吃黄家烤肉起源于章丘，以猪肉为主料，秘方配料，用水果树枝熏烤制成，口味略咸。黄家烤肉有两种，瘦肉和五花肉（带猪皮），五花肉肥而不腻，猪皮香脆可口。
天天炸鸡
泉城“十大名吃之一”。工艺精良、风味独特。
奶汤蒲菜
以济南大明湖出产的一种质地鲜嫩、味道清鲜的蒲菜为主料，加奶汤烹制而成，历来被人们誉为济南第一汤菜。
油旋
济南传统精细风味小吃。清道光年间，济南城里就有油旋经营。油旋葱香浓郁，外酥内嫩。
烧烤
回民小区、纸箱厂烧烤、啊里吧吧烧烤、一九烧烤、馕食烤吧、好旺角、良田烧烤、新疆食府、草春堂、紫罗兰烧烤、王舍人、鑫鹏羊倌。
糖醋黄河鲤鱼
糖醋黄河鲤鱼历来被尊为山东名菜之首。
济南甜沫
甜沫也叫五香甜沫，其实是咸的，是选用新鲜上好小米浸泡后磨成小米糊，熬煮时加入花生米、豇豆、红小豆、粉条、豆腐皮和菠菜等辅料，以姜葱末“倒炝锅”，加胡椒粉或“五香面”提味儿，并点入少许香油溢其香气。
特色小吃有甜煎饼、田螺、包子、锅贴、羊汤、烤地瓜、烧烤、买卖茶等。
草包包子
草包包子为山东省济南市的一道传统名吃，其始创于20世纪30年代，因创始人张文汉先生憨厚淳朴的绰号“草包”而得名，迄今已开发出以猪肉灌汤包为首的十余种风味，生意出奇的好，经济又实惠。
胡庄玫瑰花球
胡庄玫瑰花球是以平阴玫瑰为主原料，加入平阴阿胶、芝麻、蜂蜜等，经过细胞破壁技术，融合“胡庄花球”的工艺，做成的球状食品，形似巧克力，是济南平阴当地的一道地方名吃。
玉皇庙豆腐皮
玉皇庙豆腐皮是山东省济南市商河县的传统特产之一，其做法是把黄豆打浆、烧胚、过滤、点浆、舀皮，一锅豆腐皮就得舀70多张，接着是压水、扯皮、煮皮，这一连串的工序都是在40℃的高温下进行的过滤、结膜、捞膜、晾干等多道工序精制而成。尤以玉皇庙镇吕常西村的豆腐皮为佳。其薄如纸张，筋似皮条，色美味香，价廉物美。用豆腐皮做的各种冷、热、荤、素菜，其味道之香，令人望而流涎。玉皇庙豆腐皮的味道之所以香甜可口，与它的制作过程有关。
糖酥煎饼
糖酥煎饼是山东济南的汉族特色小吃，薄如纸；淡黄色；酥脆爽口。是在普通的小米糊中添加白糖和香精，即可增加风味，又可防止煎饼回生变硬。
宋楼火烧
宋楼火烧为夏津特色传统名吃，系用上等面粉，加适量黄豆面为原料制成。每个折六层，层层刷涂香油，经锅烙火烤而膨为灯笼形，香酥可口，每只重量仅七钱。故又名“灯笼火烧”、“风筝火烧”。开水冲泡滑腻可口，且易


*/
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const jinanFoodsList = [
  // 灯影牛肉
  {
    province: '山东省', // 省
    city: '济南市', // 市
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
    province: '山东省', // 省
    city: '济南市', // 市
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
