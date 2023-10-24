/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/jiangsuProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 江苏省-未知城市-特产美食
 * 万三蹄,三虾豆腐,两来风辣汤,丸子汤,众星捧月,八宝船鸭,八宝饭,卤汁豆腐干,卤茶鸡蛋,卤鸡,压面,双皮刀鱼,古沛郭家烧鸡,叫化童鸡,叫花子鸡,咕咾肉,回卤干,地锅草鸡,地锅鸡,太湖大闸蟹,太湖银鱼,太虚丸子,奥灶面,小方糕,小笼包子,小笼包饺,徐州四孔鲤鱼,拉面,文思豆腐,文楼汤包,新沂捆香蹄,无锡肉骨头,春卷,松子糖,松子肉,松鼠鳜鱼,板鸭,桃源红烧羊肉,梁溪脆鳝鱼,水晶肴肉,水晶肴蹄,汤面饺,沛公狗肉,沛县广电冷面,沛县狗肉,油爆大虾,清炖狮子头,清炖甲鱼,溜子鸡,火煮干丝,炖生敲,炖菜核,烂糊,烙馍,烤方,烧饼,热粥,牛肉汤,狮子头,猪油年糕,玫瑰瓜子,甜豆沙包,白汁元鱼,白汁圆菜,睢宁香肠,碧螺虾仁,稚羹,符离集烧鸡,糖粥藕,糖醋排骨,糖醋鳜鱼,红烧沙光鱼,纪妃伴龙颜,老鸭汤,肉脯,肉酿生麸,胭脂鹅,船点,苏州汤包,苏式月饼,苏式酱肉,酱鸭,荷花铁雀,莼菜塘鱼片,莼菜银鱼汤,菜包,葱油饼,薄饼,藏书白切羊肉,蝴蝶馓子,蟹黄面,西瓜鸡,豆腐涝,豆腐花,辣汤,酒酿圆子,酥油烧饼,金陵丸子,金陵板鸭,金陵烤鸭,金陵盐水鸭,金陵草,金陵鲜,金陵鸭,金香饼,长寿面,长鱼席,长鱼面,阳澄湖大闸蟹,雪花蟹汁,青团子,香菇炖鸡,鱼腹藏羊肉,鲃肺汤,鸡汁煮干丝,鸡汤煮干丝,鸡油菜心,鸡面干丝,鸭包鱼翅,黄泥煨鸡,黄焖栗子鸡,龙门鱼
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '江苏省', // 省
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
