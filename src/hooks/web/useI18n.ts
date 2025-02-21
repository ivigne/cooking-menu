import { i18n } from '/@/locales/setupI18n';

type I18nGlobalTranslation = {
  (key: string): string;
  (key: string, locale: string): string;
  (key: string, locale: string, list: unknown[]): string;
  (key: string, locale: string, named: Record<string, unknown>): string;
  (key: string, list: unknown[]): string;
  (key: string, named: Record<string, unknown>): string;
};

type I18nTranslationRestParameters = [string, any];

/**
 * 生成包含命名空间的键名。
 *
 * @param {string | undefined} namespace - 命名空间，如果未提供则使用默认键名。
 * @param {string} key - 原始键名。
 * @returns {string} 包含命名空间的键名，如果不需要命名空间则返回原始键名。
 */
function getKey(namespace: string | undefined, key: string) {
  // 如果命名空间未定义，直接返回原始键名
  if (!namespace) {
    return key;
  }
  // 如果键名已经以命名空间开头，直接返回该键名
  if (key.startsWith(namespace)) {
    return key;
  }
  // 否则，将命名空间和键名拼接成新的键名
  return `${namespace}.${key}`;
}

/**
 * 自定义钩子函数，用于获取国际化翻译函数。
 *
 * @param {string | undefined} namespace - 可选的命名空间，用于为翻译键添加前缀。
 * @returns {Object} 包含国际化翻译函数 `t` 的对象。
 */
export function useI18n(namespace?: string): {
  t: I18nGlobalTranslation;
} {
  // 定义一个普通的翻译函数对象，仅返回带命名空间的键
  const normalFn = {
    /**
     * 普通翻译函数，仅返回带命名空间的键。
     *
     * @param {string} key - 翻译键。
     * @returns {string} 带命名空间的键。
     */
    t: (key: string) => {
      return getKey(namespace, key);
    },
  };

  // 如果 i18n 实例未初始化，返回普通翻译函数对象
  if (!i18n) {
    return normalFn;
  }

  // 从 i18n 实例的全局对象中解构出翻译函数 t 和其他方法
  const { t, ...methods } = i18n.global;

  /**
   * 自定义的翻译函数，支持多种参数形式。
   *
   * @param {string} key - 翻译键。
   * @param {...any[]} arg - 可选的参数，用于传递给翻译函数。
   * @returns {string} 翻译结果。
   */
  const tFn: I18nGlobalTranslation = (key: string, ...arg: any[]) => {
    // 如果键为空，返回空字符串
    if (!key) return '';
    // 如果键不包含点号且没有命名空间，直接返回键
    if (!key.includes('.') && !namespace) return key;
    // 调用 i18n 的翻译函数，传递带命名空间的键和参数
    return t(getKey(namespace, key), ...(arg as I18nTranslationRestParameters));
  };
  // 返回包含自定义翻译函数和其他方法的对象
  return {
    ...methods,
    t: tFn,
  };
}

// Why write this function？
// Mainly to configure the vscode i18nn ally plugin. This function is only used for routing and menus. Please use useI18n for other places

// 为什么要编写此函数？
// 主要用于配合vscode i18nn ally插件。此功能仅用于路由和菜单。请在其他地方使用useI18n
export const t = (key: string) => key;
