/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-08-07 17:19:18
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2023-08-07 17:22:22
 * @FilePath: /cooking-menu/src/router/routes/modules/randomOrder.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const randomOrder: AppRouteModule = {
  path: '/randomOrder',
  name: 'randomOrder',
  // component: LAYOUT,
  // redirect: '/randomOrder/index',
  component: () => import('/@/views/randomOrder/index.vue'),
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:randomOrder-dot-me',
    title: t('routes.dashboard.randomOrder'),
    // orderNo: 100000,
  },
};

export default randomOrder;
