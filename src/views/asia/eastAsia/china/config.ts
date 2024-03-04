/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-04 10:58:42
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 将字符串分隔符(中文逗号，回车)统一替换成英文分隔符，并转成为数组
const replaceAndSplitStr = (value: any) => {
  return value.replace(/、/g, '').replace(/，/g, '').replace(/\n/g, '').split(',');
};
const mainCook = '酸辣士豆丝,鸡米花,香辣鸡腿堡,牛肉面,提拉米苏,牛排,骨肉相连';
const heimaCook =
  '酸甜士豆,椒盐水煮鱼,秦川黄牛肚,香酥大鲫鱼,黄金龙骨,火锅卤肥肠,大片牛腱牛肉面,真空烤卤鸭舌,果木风味鸡腿堡,盘龙东星斑,血旺烤鱼,香醋黃瓜,牛肉船面,牛肠锅,松针鲜肉包,白玉爆浆麻礨';
const creatCook = '芥末半熟牛肉,菇金酱烤鸡翅,芥末手剥鸭掌,芋头煎蟹,水瓜炆白贝,野萃牛油果卡士';

const huadongCook =
  '红糖糍粑,酥肉,超级芝士脆,玉米虾仁饭,小黄鱼焖豆腐,香醋黄瓜,牛肉咔饼,红酒泡牛仔粒,厚切酱烤牛舌串,麻辣参猪肚鸡,红米海皇粉,糖烤猪五花';
const huananCook =
  '酸菜鱼,腊味煲仔饭,原味椰子鸡,啫肥肠,酸甜土豆,谷饲板健牛扒,醋猪手,香酥大鯽鱼,芥沫半熟牛肉,黄金酱烤鸡翅,百味天妇罗,牛肉拉肠,生态竹笙椰子鸡';

const huabeiCook =
  '泰式酸辣虾,古早红糖糍杷台,烤牛肉塔可,绝味鱼头,芥沫手剥鸭掌,小罐牛排肉,桃胶珍菌卤味饭,姜公吕望烤鳗鱼';

const huazhongCook =
  '小炒肉,热干面,黑胡椒西冷牛排,小炒鲜黄牛肉,鸡肉辛拉面4,弹豆千,飘香牛肉饼,金丝川香牛肉饼,江湖味牛肉,香菇焖饼,热炒火爆虾,松茸鼎汤墨鱼元';
const dongbeiCook =
  '锅包肉,麻辣烫,冷面,奶香芝士玉米粒,水煎蔬菌,脆皮菠萝包,黑鸭翅中,酸汤谷饲肥牛煲,牛油辣和骨汤,冰鲜板健牛排,牛舌佐芥沫黄酱,芥沫海苔冰淇淋';

const xibeiCook =
  '肉夹馍,烤羊肉串,涼皮,红豆冰沙豆腐花,牦牛头肉,酱香牛尾,厚芋泥麻薯,葱香鱼头,古法胡羊焖饼,肥牛蟹籽饭,疙瘩筋牛,樱花虾灼菜心';

const xinanCook =
  '红糖糍粑,虾滑,炸酥肉,蛋炒饭,咸蛋黄蟹,黑胡椒小猪肉,辣卤脆莲藕片,糯米脆皮鸭,海味豆汤饭,嗄嗄糯香掌,豆花渎鱼,酸臭丸子,火锅肥肠包';

const configDataStr =
  mainCook +
  heimaCook +
  creatCook +
  huadongCook +
  huazhongCook +
  huabeiCook +
  huananCook +
  xinanCook +
  xibeiCook +
  dongbeiCook;
export const configDataList = replaceAndSplitStr(configDataStr);
