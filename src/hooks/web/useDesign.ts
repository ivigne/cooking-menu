import { useAppProviderContext } from '/@/components/Application';
// import { computed } from 'vue';
// import { lowerFirst } from 'lodash-es';
/**
 * 用于生成特定作用域下的前缀类名和前缀变量的钩子函数。
 *
 * @param {string} scope - 特定作用域的字符串，用于生成唯一的类名前缀。
 * @returns {Object} 返回一个包含前缀类名和前缀变量的对象。
 */
export function useDesign(scope: string) {
  // 使用 useAppProviderContext 钩子获取应用程序上下文的值
  const values = useAppProviderContext();
  // const $style = cssModule ? useCssModule() : {};

  // const style: Record<string, string> = {};
  // if (cssModule) {
  //   Object.keys($style).forEach((key) => {
  //     // const moduleCls = $style[key];
  //     const k = key.replace(new RegExp(`^${values.prefixCls}-?`, 'ig'), '');
  //     style[lowerFirst(k)] = $style[key];
  //   });
  // }
  return {
    // 计算并返回特定作用域的前缀类名
    // prefixCls: computed(() => `${values.prefixCls}-${scope}`),
    prefixCls: `${values.prefixCls}-${scope}`,
    // 返回应用程序的前缀变量
    prefixVar: values.prefixCls,
    // style,
  };
}
