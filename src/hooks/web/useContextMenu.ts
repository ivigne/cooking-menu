import { onUnmounted, getCurrentInstance } from 'vue';
import { createContextMenu, destroyContextMenu } from '/@/components/ContextMenu';
import type { ContextMenuItem } from '/@/components/ContextMenu';
export type { ContextMenuItem };
/**
 * 自定义钩子，用于管理上下文菜单的创建和销毁。
 *
 * @param {boolean} [authRemove=true] - 一个布尔值，指示是否在组件卸载时自动销毁上下文菜单。默认值为 true。
 * @returns {[Function, Function]} 一个包含两个函数的数组，分别用于创建和销毁上下文菜单。
 */
export function useContextMenu(authRemove = true) {
  // 检查当前是否有活动的 Vue 实例，并且 authRemove 为 true
  if (getCurrentInstance() && authRemove) {
    // 当组件卸载时，调用 destroyContextMenu 函数销毁上下文菜单
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  // 返回创建和销毁上下文菜单的函数
  return [createContextMenu, destroyContextMenu];
}
