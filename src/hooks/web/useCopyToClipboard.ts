import { ref, watch } from 'vue';

import { isDef } from '/@/utils/is';
interface Options {
  target?: HTMLElement;
}
/**
 * 自定义钩子，用于将文本复制到剪贴板。
 *
 * @param {string} [initial] - 初始要复制到剪贴板的文本。
 * @returns {Object} 包含三个响应式引用的对象：
 * - clipboardRef: 要复制到剪贴板的文本的引用。
 * - isSuccessRef: 指示复制操作是否成功的布尔引用。
 * - copiedRef: 指示是否已尝试复制的布尔引用。
 */
export function useCopyToClipboard(initial?: string) {
  // 初始化一个响应式引用，用于存储要复制到剪贴板的文本
  const clipboardRef = ref(initial || '');
  // 初始化一个响应式引用，用于存储复制操作是否成功的状态
  const isSuccessRef = ref(false);
  // 初始化一个响应式引用，用于存储是否已经复制过的状态
  const copiedRef = ref(false);

  /**
   * 监听clipboardRef的变化，当它的值发生变化时执行回调函数。
   * 如果新值存在，则尝试将其复制到剪贴板，并更新相应的状态。
   */
  watch(
    // 监听的数据源
    clipboardRef,
    // 当数据源变化时执行的回调函数
    (str?: string) => {
      // 检查新值是否已定义
      if (isDef(str)) {
        // 标记为已经复制过
        copiedRef.value = true;
        // 调用复制函数，并将结果存储在isSuccessRef中
        isSuccessRef.value = copyTextToClipboard(str);
      }
    },
    // 监听选项，立即执行回调函数，并且在同步模式下刷新
    { immediate: !!initial, flush: 'sync' },
  );

  // 返回包含三个响应式引用的对象
  return { clipboardRef, isSuccessRef, copiedRef };
}

/**
 * 将文本复制到剪贴板。
 *
 * @param {string} input - 要复制到剪贴板的文本。
 * @param {Options} [options] - 复制操作的选项。
 * @param {HTMLElement} [options.target=document.body] - 临时文本区域元素的父元素。
 * @returns {boolean} 如果复制操作成功，则返回 true；否则返回 false。
 */
export function copyTextToClipboard(input: string, { target = document.body }: Options = {}) {
  // 创建一个临时的 textarea 元素用于复制文本
  const element = document.createElement('textarea');
  // 保存当前聚焦的元素，以便之后恢复焦点
  const previouslyFocusedElement = document.activeElement;

  // 设置 textarea 的值为要复制的文本
  element.value = input;

  // 设置 textarea 为只读，防止用户输入
  element.setAttribute('readonly', '');

  // 设置 textarea 的样式，确保它不会影响页面布局
  (element.style as any).contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt';

  // 获取当前文档的选择范围
  const selection = document.getSelection();
  // 声明一个变量用于保存原始的选择范围
  let originalRange;
  // 如果存在选择范围且选择范围数量大于 0
  if (selection && selection.rangeCount > 0) {
    // 保存原始的选择范围
    originalRange = selection.getRangeAt(0);
  }

  // 将临时 textarea 元素添加到目标元素中
  target.append(element);
  // 选中文本区域中的文本
  element.select();

  // 设置选择的起始位置
  element.selectionStart = 0;
  // 设置选择的结束位置
  element.selectionEnd = input.length;

  // 声明一个变量用于保存复制操作的结果
  let isSuccess = false;
  try {
    // 执行复制命令
    isSuccess = document.execCommand('copy');
  } catch (e: any) {
    // 如果复制过程中出现错误，抛出异常
    throw new Error(e);
  }

  // 移除临时 textarea 元素
  element.remove();

  // 如果存在原始选择范围且存在选择对象
  if (originalRange && selection) {
    // 移除所有选择范围
    selection.removeAllRanges();
    // 恢复原始选择范围
    selection.addRange(originalRange);
  }

  // 如果之前有聚焦的元素
  if (previouslyFocusedElement) {
    // 恢复之前聚焦的元素的焦点
    (previouslyFocusedElement as HTMLElement).focus();
  }
  // 返回复制操作的结果
  return isSuccess;
}
