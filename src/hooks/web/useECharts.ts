import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';
import { useTimeoutFn } from '/@/hooks/core/useTimeout';
import { tryOnUnmounted } from '@vueuse/core';
import { unref, nextTick, watch, computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useEventListener } from '/@/hooks/event/useEventListener';
import { useBreakpoint } from '/@/hooks/event/useBreakpoint';
import echarts from '/@/utils/lib/echarts';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';

/**
 * 自定义钩子，用于在 Vue 组件中使用 ECharts 图表。
 *
 * @param {Ref<HTMLDivElement>} elRef - 用于渲染 ECharts 图表的 DOM 元素的引用。
 * @param {'light' | 'dark' | 'default'} [theme='default'] - 图表的主题，默认为 'default'。
 * @returns {Object} 包含控制 ECharts 图表的方法的对象。
 */
export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: 'light' | 'dark' | 'default' = 'default',
) {
  // 获取系统的暗黑模式设置
  const { getDarkMode: getSysDarkMode } = useRootSetting();

  // 计算当前应该使用的暗黑模式
  const getDarkMode = computed(() => {
    return theme === 'default' ? getSysDarkMode.value : theme;
  });

  // ECharts 实例
  let chartInstance: echarts.ECharts | null = null;

  // 图表的重绘函数
  let resizeFn: Fn = resize;

  // 缓存的 ECharts 配置选项
  const cacheOptions = ref({}) as Ref<EChartsOption>;

  // 移除窗口大小改变事件监听器的函数
  let removeResizeFn: Fn = () => {};

  // 对重绘函数进行防抖处理
  resizeFn = useDebounceFn(resize, 200);

  // 计算最终的 ECharts 配置选项
  const getOptions = computed(() => {
    if (getDarkMode.value !== 'dark') {
      return cacheOptions.value as EChartsOption;
    }
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value,
    } as EChartsOption;
  });

  /**
   * 初始化 ECharts 图表。
   *
   * @param {string} [t=theme] - 图表的主题。
   */
  function initCharts(t = theme) {
    // 获取 DOM 元素
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }

    // 初始化 ECharts 实例
    chartInstance = echarts.init(el, t);

    // 监听窗口大小改变事件
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn,
    });
    removeResizeFn = removeEvent;

    // 获取断点信息
    const { widthRef, screenEnum } = useBreakpoint();
    if (unref(widthRef) <= screenEnum.MD || el.offsetHeight === 0) {
      // 延迟 30ms 后重绘图表
      useTimeoutFn(() => {
        resizeFn();
      }, 30);
    }
  }

  /**
   * 设置 ECharts 图表的配置选项。
   *
   * @param {EChartsOption} options - ECharts 图表的配置选项。
   * @param {boolean} [clear=true] - 是否在设置新选项之前清除图表。
   */
  function setOptions(options: EChartsOption, clear = true) {
    // 缓存配置选项
    cacheOptions.value = options;

    if (unref(elRef)?.offsetHeight === 0) {
      // 延迟 30ms 后再次设置选项
      useTimeoutFn(() => {
        setOptions(unref(getOptions));
      }, 30);
      return;
    }

    nextTick(() => {
      // 延迟 30ms 后执行设置选项的操作
      useTimeoutFn(() => {
        if (!chartInstance) {
          // 初始化图表
          initCharts(getDarkMode.value as 'default');

          if (!chartInstance) return;
        }
        // 清除图表
        clear && chartInstance?.clear();

        // 设置图表选项
        chartInstance?.setOption(unref(getOptions));
      }, 30);
    });
  }

  /**
   * 重绘 ECharts 图表。
   */
  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    });
  }

  // 监听暗黑模式的变化
  watch(
    () => getDarkMode.value,
    (theme) => {
      if (chartInstance) {
        // 销毁当前图表实例
        chartInstance.dispose();
        // 重新初始化图表
        initCharts(theme as 'default');
        // 重新设置图表选项
        setOptions(cacheOptions.value);
      }
    },
  );

  // 在组件卸载时清理资源
  tryOnUnmounted(() => {
    if (!chartInstance) return;
    // 移除窗口大小改变事件监听器
    removeResizeFn();
    // 销毁图表实例
    chartInstance.dispose();
    chartInstance = null;
  });

  /**
   * 获取 ECharts 实例。
   *
   * @returns {echarts.ECharts | null} ECharts 实例，如果未初始化则进行初始化。
   */
  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      // 初始化图表
      initCharts(getDarkMode.value as 'default');
    }
    return chartInstance;
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance,
  };
}
