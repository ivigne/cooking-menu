import { useAppProviderContext } from '/@/components/Application';
import { computed, unref } from 'vue';

/**
 * 自定义钩子，用于注入应用程序上下文并获取应用程序的状态。
 *
 * @returns {Object} 包含获取应用程序状态的计算属性的对象。
 */
export function useAppInject() {
  // 使用 useAppProviderContext 钩子获取应用程序上下文的值
  const values = useAppProviderContext();

  return {
    /**
     * 计算属性，用于获取当前是否为移动设备的状态。
     *
     * @returns {boolean} 如果是移动设备，则返回 true；否则返回 false。
     */
    getIsMobile: computed(() => unref(values.isMobile)),
  };
}
