/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/zhejiangProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 浙江省-未知城市-特产美食
 * 五夫醉鸡,兔头煲,千张包子,南浔香大头菜,南湖蟹肉包子,印糕,叫化童鸡,响铃儿,嘉兴肉粽,塘栖板鸭,大荆冬米糖,天下第一包,定胜糕,小笼包,小鸡酥,师爷盒,扣鸡,文成拉面,木瓜酥,松子糕,桂花炒米糕,桂花香糕,桂花鲜栗羹,楠溪糯米糖,水晶团子,水晶银菊糕,汤团缸鸭狗,油卵,洋钱饼,活油豆沙蒸蛋糕,浙南鱼面,浙江榨菜,浙江风鸡,海宁斜桥榨菜,片儿川,猪油汤圆,瓯江凤尾鱼,知味小笼包,膨化鳗片,舟山虾爆鳝面,芝脚糖,苔菜千层酥,荷花酥,莘塍豆腐干,虹桥绿豆糕,虾爆鳝背,虾爆鳝面,虾肉小笼,蜜仁糕,蟹粉阳春面,西湖莼菜,豆沙汤团,象生雪梨,酒香月饼,酥油饼,重阳栗糕,雪菜笋丝汤,霉干菜烧肉,香糕,鱼肉皮子馄饨,鸡肉线粉,鸡骨香糕,麻心元宵,黑麻酥
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '浙江省', // 省
    city: '', // 市
    district: '', // 区
    address: '', // 地方名称
    foodAvatar: '', // 美食图片
    foodName: '灯影牛肉', // 美食名称
    foodName_en: '', // 美食英文名称
    foodCategoryCode: 'beef', // 食材类别编码
    foodCategoryName: '牛肉', // 食材类别名称
    cuisineCategoryCode: 'qiongCuisine', // 菜系编码
    cuisineCategoryName: '琼菜', // 所属菜系
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
