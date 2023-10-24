/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 17:34:15
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/mockData/fujianProvince/others.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 * 福建省-未知城市-特产美食
 * 九层粿,光饼,半月沉江,南海金莲,南瓜鱼翅盅,双钱蛋茹,喷鼻椿芽,回力草炖猪脚,夏茂芋饺,太极芋泥,峡阳木樨糕,幔亭宴,建瓯板鸭,扁肉,扁肉燕,扳指千贝,拳头粟饧,文公菜,春卷,春饼,油葱果,泥鱼粉干,海蛎饼,涌泉三丝,涮兔肉,淡糟香螺片,炒木锦花,炒泗粉,炒肉糕,炒苦瓜,炒马蓝草,炒马齿苋,炝肉,炸五香,炸满圆,炸薯丸,炸雪薯,烧卖,烧肉粽,焖豆腐,煎薯饼,熏鹅,燕皮,牛腩子,狗爪豆,生烫血蛤,番瓜汤,番瓜饧,白切羊肉,白头翁饧,真心豆腐丸,石鼓三鲜,福州鱼丸,禧果,米冻皮,米冻糕,线面,肉丸,肉松,肉松肝,肉燕,脆黄瓜,芋子包,芋子糕,芋子饺,芋泥,芋粿,花煎糟鱼,苎叶饧,苦斋汤,茄汁鸡肉,茶宴,莆仙山里炝粉,莆田煎包,菊花鱼,菠菠粿,葱肉饼,葱花螺,蒸满圆,薄饼干,蚵仔煎,蛇宴,蛎饼,蟹黄扒官燕,西天尾扁食,豆沙糍粑,酥鸽,酸辣鱿鱼汤,酿芋子,酿苦瓜,酿青椒,醉糟鸡,野苋菜,锅边糊,阿罗汉豆,韭菜盒,食抓糍,香露河走油田鸡,高粱粟,鱼丸,鲜贝酿辽参,鲤干,鸡汤氽海蚌,鸡爪草,鸭爪草,鹭岛明珠,麦子饧,鼎日有,龙风汤
 */

import { lampshadedBeefScriptsList } from './templateFoodScriptContent/lampshadedBeef';
export const foodsStr = '';
export const othersFoodsList = [
  // 灯影牛肉
  {
    province: '福建省', // 省
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
