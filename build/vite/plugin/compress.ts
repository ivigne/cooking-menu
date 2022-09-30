/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-07-05 11:56:58
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-08-22 19:27:42
 * @FilePath: /cooking-menu/build/vite/plugin/compress.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Used to package and output gzip. Note that this does not work properly in Vite, the specific reason is still being investigated
 */
import type { PluginOption } from 'vite';
import compressPlugin from 'vite-plugin-compression';

export function configCompressPlugin(
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false,
): PluginOption | PluginOption[] {
  const compressList = compress.split(',');

  const plugins: PluginOption[] = [];

  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile,
      }),
    );
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      }),
    );
  }
  return plugins;
}
