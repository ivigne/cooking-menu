/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-07-05 11:56:58
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-08-22 19:27:56
 * @FilePath: /cooking-menu/build/vite/plugin/styleImport.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 *  Introduces component library styles on demand.
 */
import { createStyleImportPlugin } from 'vite-plugin-style-import';

export function configStyleImportPlugin(_isBuild: boolean) {
  // if (!isBuild) {
  //   return [];
  // }
  const styleImportPlugin = createStyleImportPlugin({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          // 这里是无需额外引入样式文件的“子组件”列表
          const ignoreList = [
            'anchor-link',
            'sub-menu',
            'menu-item',
            'menu-divider',
            'menu-item-group',
            'breadcrumb-item',
            'breadcrumb-separator',
            'form-item',
            'step',
            'select-option',
            'select-opt-group',
            'card-grid',
            'card-meta',
            'collapse-panel',
            'descriptions-item',
            'list-item',
            'list-item-meta',
            'table-column',
            'table-column-group',
            'tab-pane',
            'tab-content',
            'timeline-item',
            'tree-node',
            'skeleton-input',
            'skeleton-avatar',
            'skeleton-title',
            'skeleton-paragraph',
            'skeleton-image',
            'skeleton-button',
          ];
          // 这里是需要额外引入样式的子组件列表
          // 单独引入子组件时需引入组件样式，否则会在打包后导致子组件样式丢失
          const replaceList = {
            'typography-text': 'typography',
            'typography-title': 'typography',
            'typography-paragraph': 'typography',
            'typography-link': 'typography',
            'dropdown-button': 'dropdown',
            'input-password': 'input',
            'input-search': 'input',
            'input-group': 'input',
            'radio-group': 'radio',
            'checkbox-group': 'checkbox',
            'layout-sider': 'layout',
            'layout-content': 'layout',
            'layout-footer': 'layout',
            'layout-header': 'layout',
            'month-picker': 'date-picker',
            'range-picker': 'date-picker',
          };

          return ignoreList.includes(name)
            ? ''
            : replaceList.hasOwnProperty(name)
            ? `ant-design-vue/es/${replaceList[name]}/style/index`
            : `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
