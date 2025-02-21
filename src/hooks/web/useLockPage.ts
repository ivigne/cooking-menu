import { computed, onUnmounted, unref, watchEffect } from 'vue';
import { useThrottleFn } from '@vueuse/core';

import { useAppStore } from '/@/store/modules/app';
import { useLockStore } from '/@/store/modules/lock';

import { useUserStore } from '/@/store/modules/user';
import { useRootSetting } from '../setting/useRootSetting';

/**
 * 自定义钩子，用于处理页面锁定逻辑。
 * 当用户在一定时间内无操作时，自动锁定页面。
 *
 * @returns {ComputedRef<{ onKeyup: Function, onMousemove: Function } | {}>} 一个计算属性，根据是否启用锁定时间返回相应的事件处理函数。
 */
export function useLockPage() {
  // 获取根设置中的锁定时间
  const { getLockTime } = useRootSetting();
  // 获取锁定状态的存储
  const lockStore = useLockStore();
  // 获取用户信息的存储
  const userStore = useUserStore();
  // 获取应用配置的存储
  const appStore = useAppStore();

  // 定义一个变量用于存储定时器的 ID
  let timeId: TimeoutHandle;

  /**
   * 清除定时器。
   *
   * @returns {void}
   */
  function clear(): void {
    // 清除之前设置的定时器
    window.clearTimeout(timeId);
  }

  /**
   * 重置锁定超时计时器。
   * 如果用户未登录或锁定时间未设置或小于 1 分钟，则清除计时器。
   * 否则，设置一个新的定时器，在指定的锁定时间后锁定页面。
   *
   * @returns {void}
   */
  function resetCalcLockTimeout(): void {
    // 如果用户未登录
    if (!userStore.getToken) {
      // 清除定时器
      clear();
      return;
    }
    // 获取应用配置中的锁定时间
    const lockTime = appStore.getProjectConfig.lockTime;
    // 如果锁定时间未设置或小于 1 分钟
    if (!lockTime || lockTime < 1) {
      // 清除定时器
      clear();
      return;
    }
    // 清除之前设置的定时器
    clear();

    // 设置一个新的定时器，在锁定时间后调用 lockPage 函数
    timeId = setTimeout(() => {
      lockPage();
    }, lockTime * 60 * 1000);
  }

  /**
   * 锁定页面。
   * 将锁定状态设置为 true，并清空密码。
   *
   * @returns {void}
   */
  function lockPage(): void {
    // 设置锁定信息，将锁定状态设置为 true，密码设置为 undefined
    lockStore.setLockInfo({
      isLock: true,
      pwd: undefined,
    });
  }

  // 监听用户登录状态的变化
  watchEffect((onClean) => {
    // 如果用户已登录
    if (userStore.getToken) {
      // 重置锁定超时计时器
      resetCalcLockTimeout();
    } else {
      // 如果用户未登录，清除定时器
      clear();
    }
    // 在副作用清理时清除定时器
    onClean(() => {
      clear();
    });
  });

  // 在组件卸载时清除定时器
  onUnmounted(() => {
    clear();
  });

  // 使用节流函数包装 resetCalcLockTimeout 函数，每 2000 毫秒最多执行一次
  const keyupFn = useThrottleFn(resetCalcLockTimeout, 2000);

  // 返回一个计算属性，根据是否启用锁定时间返回相应的事件处理函数
  return computed(() => {
    // 如果启用了锁定时间
    if (unref(getLockTime)) {
      // 返回键盘按下和鼠标移动事件的处理函数
      return { onKeyup: keyupFn, onMousemove: keyupFn };
    } else {
      // 如果未启用锁定时间，清除定时器
      clear();
      // 返回空对象
      return {};
    }
  });
}
