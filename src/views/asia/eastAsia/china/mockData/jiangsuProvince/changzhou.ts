/**
 * 江苏-常州市-特产美食
萝卜干、大麻糕、芝麻糖、溧阳风鹅、
银丝面
银丝面是常州府（今常州）及周边一带的地方传统面食小吃，配料讲究，操作工序严格，具有面细如丝，色白似银，柔软滑爽，富有韧性，下锅不糊等特点，为《中国小吃（江苏风味）》收辑品种之一。
天目湖砂锅鱼头
天目湖砂锅鱼头是江苏省天目湖地区的传统名菜。天目湖是一个地名，位于江苏常州溧阳市。汤鲜汁浓，尝过者无不赞叹其美不可言，可是说起它的来历，知道的人却很少。天目湖的砂锅煨鱼头又叫沙河煨鱼头。天目湖原名沙河水库，水库中盛长鳙鱼沙河鳙鱼长得体大壮实，肉质细腻，做出的菜肴滋味鲜美，营养丰富。
水晶宫磨笼虾
水晶宫磨笼虾是江苏常州传统的地方名菜，属于苏菜系。此菜酸甜带涩，别具风味。主要原料有海虾150克，王不留行30克，桑椹30克。
荷包丸子
荷包丸子是江苏常州传统名菜，属于苏菜系。猪肉制茸，加调料、虾米丁、香菇丁、清水、鸡蛋搅匀成馅。油面筋洗净沥干，逐个切开填入肉馅成荷包形，粘上蛋黄糊，下7成热油锅炸至金黄色捞出。姜末、葱段呛锅，下猪排骨汤，再下丸子、虾仁、菠菜烧1分钟，勾芡起装盘即成。
常州大麻糕
常州大麻糕，江苏省地方特色糕点。是由长乐茶社王长生师傅创制，距今已有150余年历史。其皮薄酥重，制作考究，注重火候，为一般麻糕所不及。分甜、咸两种。此点先后在徐州、南京参加江苏省名点小吃展
加蟹小笼包
加蟹小笼包是江苏省常州地区特色传统小吃，是常州小河沿浮桥南堍的万华茶楼于清道光年间首创，每年中秋节前后，桂花盛开之际上市供应。加蟹小笼包，原来叫加蟹小笼馒头。馒头诞生时本无包子这一称
溧阳扎肝
溧阳扎肝是以猪小肠，五花肉，猪肝，笋干为原料制作的一道菜品
常州糟扣肉
常州糟扣肉是江苏常州的地方传统名菜，当地冬令、初春的时令佳肴，源于苏南民间家常菜，70 余年前引入菜馆。1925 年常州名厨强良生在烹制工艺上将涂拌酱色改为直接加料走红，使此菜色、香、味更佳
溧阳三黄鸡
溧阳三黄鸡产于江苏溧阳。这种鸡的特征为黄喙、黄毛、黄爪，故称。其体重可达八斤、九斤以上，故又称“九斤黄”。为蛋肉兼用型地方良种家禽。按体形分为大、中型两类。
羊肉酸菜煲
羊肉酸菜煲江苏常州传统名肴，属于江苏菜，对肺结核、气管炎、哮喘、贫血、产后气血两虚、腹部冷痛、体虚畏寒、营养不良、腰膝酸软、阳痿早泄以及一切虚寒病症均有很大裨益。
八宝酿鲜鱿
八宝酿鲜鱿是江苏常州地方传统名菜，属于苏系。
馄饨蔬菜清汤
馄饨蔬菜清汤是一道美味可口的传统小吃，属于苏菜系常州菜。小白菜洗净，切段；猪肉馅放入碗中加入高汤拌匀，做成肉馅。 馄饨皮中填入适量肉馅包好。锅内倒入高汤烧开，放入馄饨煮至浮起。加入小白菜及鸡精、盐、胡椒粉、香油煮熟，淋上香油即可。


*/
import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const changzhouFoodsList = [
  // 灯影牛肉
  {
    province: '江苏省', // 省
    city: '常州市', // 市
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
  },
  // 尖椒肥肠
  {
    province: '江苏省', // 省
    city: '常州市', // 市
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
  },
];
