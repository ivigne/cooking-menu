/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-07-05 11:56:58
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-08-22 19:27:52
 * @FilePath: /cooking-menu/build/vite/plugin/mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Mock plugin for development and production.
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  });
}
