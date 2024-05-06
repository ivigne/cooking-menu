/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2024-03-11 13:39:32
 * @FilePath: /cooking-menu/src/components/VxeTable/src/helper.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { ComponentType } from './componentType';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (!component) return;
  if (component.includes('RangePicker')) {
    return [t('common.chooseText'), t('common.chooseText')];
  }
  if (component.includes('Input') || component.includes('Complete') || component.includes('Rate')) {
    return t('common.inputText');
  } else {
    return t('common.chooseText');
  }
}
