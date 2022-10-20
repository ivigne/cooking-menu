/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-20 10:54:11
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from '/@/components/Table';
// 食材类别-集合
const foodCategoryList = [
  {
    label: '牛肉',
    value: 'beef',
  },
];
// 	拍摄手法				画面表达			后期剪辑				备注
export const tableColumnsConfig: BasicColumn[] = [
  {
    title: '拍摄角度',
    dataIndex: 'shootingAngle',
  },
  {
    title: '景别',
    dataIndex: 'scenery',
  },
  {
    title: '运镜',
    dataIndex: 'camera',
  },
  {
    title: '镜头',
    dataIndex: 'shots',
  },
  {
    title: '拍摄场景',
    dataIndex: 'shootingScene',
  },
  {
    title: '画面内容',
    dataIndex: 'content',
  },
  {
    title: '台词/文案',
    dataIndex: 'linesOrText',
  },
  {
    title: '字幕',
    dataIndex: 'subtitles',
  },
  {
    title: '音乐',
    dataIndex: 'music',
  },
  {
    title: '音效',
    dataIndex: 'soundEffects',
  },
  {
    title: '时长',
    dataIndex: 'duration',
  },
];
