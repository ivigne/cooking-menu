/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-15 11:50:49
 * @FilePath: /cooking-menu/src/router/routes/modules/snacks.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 小吃系列

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const snacks: AppRouteModule = {
  path: '/snacks',
  name: 'snacks',
  component: LAYOUT,
  redirect: '/snacks/china',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.snacks.snack'),
  },
  children: [
    {
      path: 'china',
      name: 'SnacksChina',
      component: () => import('/@/views/snacks/china/index.vue'),
      meta: {
        title: t('routes.snacks.china'),
      },
    },
  ],
};

export default snacks;
