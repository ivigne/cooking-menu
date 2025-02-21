import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';

import { Modal, message as Message, notification } from 'ant-design-vue';
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue';

import { NotificationArgsProps, ConfigProps } from 'ant-design-vue/lib/notification';
import { useI18n } from './useI18n';
import { isString } from '/@/utils/is';

export interface NotifyApi {
  info(config: NotificationArgsProps): void;
  success(config: NotificationArgsProps): void;
  error(config: NotificationArgsProps): void;
  warn(config: NotificationArgsProps): void;
  warning(config: NotificationArgsProps): void;
  open(args: NotificationArgsProps): void;
  close(key: String): void;
  config(options: ConfigProps): void;
  destroy(): void;
}

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type IconType = 'success' | 'info' | 'error' | 'warning';
export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: 'warning' | 'success' | 'error' | 'info';
}
export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>;

interface ConfirmOptions {
  info: ModalFunc;
  success: ModalFunc;
  error: ModalFunc;
  warn: ModalFunc;
  warning: ModalFunc;
}

/**
 * 根据传入的图标类型返回对应的 Ant Design Vue 图标组件。
 *
 * @param {string} iconType - 图标类型，可选值为 'warning'、'success'、'info' 或其他值（默认返回错误图标）。
 * @returns {JSX.Element} - 对应的 Ant Design Vue 图标组件。
 */
function getIcon(iconType: string) {
  // 如果图标类型为 'warning'，返回警告图标
  if (iconType === 'warning') {
    return <InfoCircleFilled class="modal-icon-warning" />;
  }
  // 如果图标类型为 'success'，返回成功图标
  else if (iconType === 'success') {
    return <CheckCircleFilled class="modal-icon-success" />;
  }
  // 如果图标类型为 'info'，返回信息图标
  else if (iconType === 'info') {
    return <InfoCircleFilled class="modal-icon-info" />;
  }
  // 其他情况，返回错误图标
  else {
    return <CloseCircleFilled class="modal-icon-error" />;
  }
}

/**
 * 渲染模态框的内容。
 *
 * @param {Pick<ModalOptionsEx, 'content'>} param - 包含模态框内容的对象。
 * @param {string | JSX.Element} param.content - 模态框的内容，可以是字符串或 JSX 元素。
 * @returns {JSX.Element} - 渲染后的模态框内容。
 */
function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  // 如果内容是字符串类型
  if (isString(content)) {
    // 使用 innerHTML 属性将字符串包裹在一个 div 元素中并返回
    return <div innerHTML={`<div>${content as string}</div>`}></div>;
  } else {
    // 如果内容不是字符串类型（可能是 JSX 元素），直接返回该内容
    return content;
  }
}

/**
 * @description: Create confirmation box
 */
/**
 * 创建一个确认框，根据传入的选项生成不同类型的确认框。
 *
 * @param {ModalOptionsEx} options - 确认框的配置选项，包含图标类型、内容等。
 * @returns {ConfirmOptions} 返回一个包含不同类型确认框函数的对象。
 */
function createConfirm(options: ModalOptionsEx): ConfirmOptions {
  // 获取图标类型，如果未提供则默认使用 'warning'
  const iconType = options.iconType || 'warning';
  // 从选项中删除 'iconType' 属性，避免传递给 Ant Design 的确认框组件
  Reflect.deleteProperty(options, 'iconType');
  // 定义确认框的基本配置
  const opt: ModalFuncProps = {
    // 确认框内容居中显示
    centered: true,
    // 根据图标类型获取对应的图标组件
    icon: getIcon(iconType),
    // 展开传入的选项
    ...options,
    // 渲染确认框的内容
    content: renderContent(options),
  };
  // 调用 Ant Design 的 Modal.confirm 方法创建确认框，并将结果转换为 ConfirmOptions 类型
  return Modal.confirm(opt) as unknown as ConfirmOptions;
}

const getBaseOptions = () => {
  const { t } = useI18n();
  return {
    okText: t('common.okText'),
    centered: true,
  };
};

function createModalOptions(options: ModalOptionsPartial, icon: string): ModalOptionsPartial {
  return {
    ...getBaseOptions(),
    ...options,
    content: renderContent(options),
    icon: getIcon(icon),
  };
}

function createSuccessModal(options: ModalOptionsPartial) {
  return Modal.success(createModalOptions(options, 'success'));
}

function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, 'close'));
}

function createInfoModal(options: ModalOptionsPartial) {
  return Modal.info(createModalOptions(options, 'info'));
}

function createWarningModal(options: ModalOptionsPartial) {
  return Modal.warning(createModalOptions(options, 'warning'));
}

notification.config({
  placement: 'topRight',
  duration: 3,
});

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: Message,
    notification: notification as NotifyApi,
    createConfirm: createConfirm,
    createSuccessModal,
    createErrorModal,
    createInfoModal,
    createWarningModal,
  };
}
