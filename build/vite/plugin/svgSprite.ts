/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-07-05 11:56:58
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-08-22 19:28:41
 * @FilePath: /cooking-menu/build/vite/plugin/svgSprite.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 *  Vite Plugin for fast creating SVG sprites.
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
