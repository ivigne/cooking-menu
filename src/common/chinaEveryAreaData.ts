// 各城市数据、路线数据
import { ref } from 'vue';
// import { cityList } from '/@/common/city';
/**
 * 华东-南方路线一二线城市:
 * 上海市->
 * 浙江省(杭州市,宁波市)->
 * 福建省(厦门市,福州市,宁德市,泉州市,漳州市)->
 * 台湾省(台北市,高雄市)->
 * 广东省(深圳市,广州市,东莞市,佛山市,珠海市,惠州市,中山市,湛江市)->
 * 香港特别行政区->
 * 澳门特别行政区->
 * 海南省(海口市,三亚市)->
 * 广西壮族自治区(南宁市,桂林市,柳州市)->
 * 贵州省(贵阳)->
 * 云南省(昆明市)->
 * 四川省(成都市)->
 * 重庆市(重庆市)->
 * 湖北省(武汉市,宜昌市,襄阳市,荆州市)->
 * 湖南省(长沙市,岳阳市)->
 * 江西省(南昌市,九江市,赣州市)->
 * 安徽省(合肥市,芜湖市)->
 * 江苏省(南京市,无锡市,苏州市,常州市,南通市,盐城市,徐州市,泰州市)->
 * 上海市
 */
export const zhejiangCity = ['杭州市', '宁波市'];
export const fujianCity = ['厦门市', '福州市', '宁德市', '泉州市', '漳州市'];
export const taiwanCity = ['台北市', '高雄市'];
export const guangdongCity = [
  '深圳市',
  '广州市',
  '东莞市',
  '佛山市',
  '珠海市',
  '惠州市',
  '中山市',
  '湛江市',
];
export const hongkongCity = ['香港特别行政区'];
export const macauCity = ['澳门特别行政区'];
export const hainanCity = ['海口市', '三亚市'];
export const guangxiCity = ['南宁市', '桂林市', '柳州市'];
export const hubeiCity = ['武汉市', '宜昌市', '襄阳市', '荆州市'];
export const hunanCity = ['长沙市', '岳阳市'];
export const jiangxiCity = ['南昌市', '九江市', '赣州市'];
export const anhuiCity = ['合肥市', '芜湖市'];
export const jiangsuCity = [
  '南京市',
  '无锡市',
  '苏州市',
  '常州市',
  '南通市',
  '盐城市',
  '徐州市',
  '泰州市',
];
// 华东-南方路线-第一次打卡的城市集合-未删减版
export const chinaAreaEastProvinceSouthLineFirstPlan = [
  '上海市',
  '杭州市',
  '宁波市',
  '厦门市',
  '福州市',
  '宁德市',
  '泉州市',
  '漳州市',
  '台北市',
  '高雄市',
  '深圳市',
  '广州市',
  '东莞市',
  '佛山市',
  '珠海市',
  '惠州市',
  '中山市',
  '湛江市',
  '香港特别行政区',
  '澳门特别行政区',
  '海口市',
  '三亚市',
  '南宁市',
  '桂林市',
  '柳州市',
  '贵阳市',
  '昆明市',
  '成都市',
  '重庆市',
  '武汉市',
  '宜昌市',
  '襄阳市',
  '荆州市',
  '长沙市',
  '岳阳市',
  '南昌市',
  '九江市',
  '赣州市',
  '合肥市',
  '芜湖市',
  '南京市',
  '无锡市',
  '苏州市',
  '常州市',
  '南通市',
  '盐城市',
  '徐州市',
  '泰州市',
  '上海市',
];
// 华东-南方路线-第一次打卡的城市集合-已删减
export const chinaAreaEastProvinceSouthLineFirst = [
  '上海市',
  '杭州市',
  '宁波市',
  '泉州市',
  '福州市',
  '漳州市',
  '台北市',
  '高雄市',
  '广州市',
  '佛山市',
  '湛江市',
  '三亚市',
  '桂林市',
  '柳州市',
  '贵阳市',
  '昆明市',
  '成都市',
  '重庆市',
  '武汉市',
  '襄阳市',
  '荆州市',
  '长沙市',
  '南昌市',
  '九江市',
  '合肥市',
  '南京市',
  '苏州市',
  '徐州市',
  // '上海市',
];

// 国内各省排序,人口从多','少
export const chinaProvinceDesc = [
  '广东省',
  '山东省',
  '河南省',
  '江苏省',
  '四川省',
  '河北省',
  '湖南省',
  '浙江省',
  '安徽省',
  '湖北省',
  '广西壮族自治区',
  '云南省',
  '江西省',
  '辽宁省',
  '福建省',
  '陕西省',
  '贵州省',
  '山西省',
  '重庆市',
  '黑龙江省',
  '新疆维吾尔自治区',
  '甘肃省',
  '上海市',
  '吉林省',
  '内蒙古自治区',
  '台湾省',
  '北京市',
  '天津市',
  '海南省',
  '香港特别行政区',
  '宁夏回族自治区',
  '青海省',
  '西藏自治区',
  '澳门特别行政区',
];
// 东部地区各省
export const chinaEastProvince = [
  '北京市',
  '天津市',
  '河北省',
  '上海市',
  '江苏省',
  '浙江省',
  '福建省',
  '山东省',
  '广东省',
  '海南省',
];
// 中部地区各省
export const chinaCenterProvince = ['山西省', '安徽省', '江西省', '河南省', '湖北省', '湖南省'];
// 西部地区各省
export const chinaWestProvince = [
  '内蒙古自治区',
  '广西壮族自治区',
  '重庆市',
  '四川省',
  '贵州省',
  '云南省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
];
// 东北地区各省
export const chinaEastNorthProvince = ['辽宁省', '吉林省', '黑龙江省'];

// 华北地区各省
export const chinaNorthProvince = ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区'];

// 华东地区各省
export const chinaEastProvince1 = [
  '上海市',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '台湾省',
];

// 华南地区各省
export const chinaSouthProvince = [
  '广东省',
  '广西壮族自治区',
  '海南省',
  '香港特别行政区',
  '澳门特别行政区',
];

// 华中地区各省
export const chinaCenterProvince1 = ['河南省', '湖北省', '湖南省'];

// 西南地区各省
export const chinaWestSouthProvince = ['四川省', '贵州省', '云南省', '西藏自治区', '重庆市'];

// 西北地区各省
export const chinaWestNorthProvince = [
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
];
// 有下属地区的省
export const chinaProvinceWithArea = [
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '内蒙古自治区',
  '广西壮族自治区',
  '西藏自治区',
  '河北省',
  '山西省',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '台湾省',
  '广东省',
  '海南省',
];
// 国内各地区集合
export const chinaAreaProvince = {
  east: chinaEastProvince,
  center: chinaCenterProvince,
  west: chinaWestProvince,
  north: chinaNorthProvince,
  south: chinaSouthProvince,
  eastNorth: chinaEastNorthProvince,
  westSouth: chinaWestSouthProvince,
  westNorth: chinaWestNorthProvince,
  center1: chinaCenterProvince1,
  east1: chinaEastProvince1,
};

// 旧分区排序,人口从多','少
export const oldAreaDesc = ['东部地区', '西部地区', '中部地区', '东北地区'];
// 旧分区按照城市排序,人口从多','少
export const oldAreaCityDesc = ['东部地区', '西部地区', '中部地区', '东北地区'];

// 新分区排序,人口从多','少
export const newAreaDesc = [
  '华东地区',
  '华中地区',
  '西南地区',
  '华南地区',
  '华北地区',
  '西北地区',
  '东北地区',
];

// 一线城市（29）：
export const cityFirst = [
  '香港特别行政区',
  '深圳市',
  '北京市',
  '广州市',
  '上海市',
  '台北市',
  '重庆市',
  '武汉市',
  '南京市',
  '西安市',
  '东莞市',
  '澳门特别行政区',
  '佛山市',
  '无锡市',
  '长沙市',
  '郑州市',
  '青岛市',
  '天津市',
  '珠海市',
  '济南市',
  '合肥市',
  '大连市',
  '厦门市',
  '成都市',
  '高雄市',
  '杭州市',
  '惠州市',
  '苏州市',
  '福州市',
];
// 二线城市（35）：
export const citySecond = [
  '常州市',
  '宁德市',
  '石家庄市',
  '南昌市',
  '南宁市',
  '南通市',
  '太原市',
  '泉州市',
  '烟台市',
  '中山市',
  '宜昌市',
  '海口市',
  '昆明市',
  '桂林市',
  '乌鲁木齐市',
  '芜湖市',
  '九江市',
  '漳州市',
  '宁波市',
  '盐城市',
  '柳州市',
  '襄阳市',
  '榆林市',
  '洛阳市',
  '徐州市',
  '湛江市',
  '泰州市',
  '赣州市',
  '沈阳市',
  '商丘市',
  '兰州市',
  '长春市',
  '荆州市',
  '岳阳市',
  '三亚市',
];
// 三线城市（36）：
export const cityThird = [
  '镇江市',
  '清远市',
  '龙岩市',
  '韶关市',
  '莆田市',
  '哈尔滨市',
  '绍兴市',
  '黄冈市',
  '阳江市',
  '常德市',
  '衡阳市',
  '上饶市',
  '温州市',
  '南平市',
  '株洲市',
  '郴州市',
  '南阳市',
  '汕尾市',
  '湘潭市',
  '淮安市',
  '揭阳市',
  '孝感市',
  '保定市',
  '威海市',
  '宜春市',
  '汕头市',
  '潮州市',
  '金华市',
  '咸宁市',
  '贵阳市',
  '茂名市',
  '嘉兴市',
  '新乡市',
  '许昌市',
  '信阳市',
  '台州市',
];
// 地区下拉
export const areaOptions = [
  {
    label: '东部地区',
    value: 'east',
    children: chinaAreaProvince.east,
  },
  {
    label: '华南地区',
    value: 'south',
    children: chinaAreaProvince.south,
  },
  {
    label: '中部地区',
    value: 'center',
    children: chinaAreaProvince.center,
  },
  {
    label: '西部地区',
    value: 'west',
    children: chinaAreaProvince.west,
  },
  {
    label: '西北地区',
    value: 'westNorth',
    children: chinaAreaProvince.westNorth,
  },
  {
    label: '东北地区',
    value: 'eastNorth',
    children: chinaAreaProvince.eastNorth,
  },
  {
    label: '华北地区',
    value: 'north',
    children: chinaAreaProvince.north,
  },
  {
    label: '西南地区',
    value: 'westSouth',
    children: chinaAreaProvince.westSouth,
  },
  {
    label: '华中地区',
    value: 'center1',
    children: chinaAreaProvince.center1,
  },
  {
    label: '华东地区',
    value: 'east1',
    children: chinaAreaProvince.east1,
  },
];
// 华东为起点的南方路线-18个省份/直辖市/自治区
// 华东-华南-西南-华中-华东(18)
export const chinaAreaEastProvinceSouthLine = [
  '上海市',
  '浙江省',
  '福建省',
  '台湾省',
  '广东省',
  '香港特别行政区',
  '澳门特别行政区',
  '海南省',
  '广西壮族自治区',
  '贵州省',
  '云南省',
  '西藏自治区',
  '四川省',
  '重庆市',
  '湖北省',
  '湖南省',
  '江西省',
  '安徽省',
  '江苏省',
  '上海市',
];
// 华东为起点的北方路线-16个省份/直辖市/自治区
// 华东-华北-东北-西北-华中-华东(16)
export const chinaAreaEastProvinceNorthLine = [
  '上海市',
  '山东省',
  '河北省',
  '天津市',
  '北京市',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '内蒙古自治区',
  '甘肃省',
  '新疆维吾尔自治区',
  '青海省',
  '宁夏回族自治区',
  '陕西省',
  '山西省',
  '河南省',
  '上海市',
];
// 西南为起点的南方路线-20个省份/直辖市/自治区
// 西南-西北-华北-东北-华中-西南(14)
export const chinaAreaWestSouthProvinceSouthLine = [
  '重庆市',
  '四川省',
  '西藏自治区',
  '云南省',
  '贵州省',
  '广西壮族自治区',
  '澳门特别行政区',
  '海南省',
  '广东省',
  '香港特别行政区',
  '福建省',
  '台湾省',
  '浙江省',
  '江西省',
  '上海市',
  '江苏省',
  '山东省',
  '安徽省',
  '湖北省',
  '湖南省',
  '重庆市',
];
// 西南为起点的北方路线-14个省份/直辖市/自治区
// 西南-华南-华东-华中-西南(20)
export const chinaAreaWestSouthProvinceNorthLine = [
  '重庆市',
  '陕西省',
  '青海省',
  '新疆维吾尔自治区',
  '甘肃省',
  '宁夏回族自治区',
  '内蒙古自治区',
  '黑龙江省',
  '吉林省',
  '辽宁省',
  '北京市',
  '天津市',
  '河北省',
  '山西省',
  '河南省',
  '重庆市',
];

export const cityLevelOptions = ref([
  {
    label: '一线城市',
    value: 'first',
    children: cityFirst,
  },
  {
    label: '二线城市',
    value: 'second',
    children: citySecond,
  },
  {
    label: '三线城市',
    value: 'third',
    children: cityThird,
  },
]);
