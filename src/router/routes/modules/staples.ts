/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-15 11:51:08
 * @FilePath: /cooking-menu/src/router/routes/modules/staples.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 主食系列
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const staples: AppRouteModule = {
  path: '/staples',
  name: 'staples',
  component: LAYOUT,
  redirect: '/staples/rice',
  meta: {
    orderNo: 3,
    icon: 'ion:grid-outline',
    title: t('routes.staples.staples'),
  },
  children: [
    {
      path: '/rice',
      name: 'rice',
      component: () => import('/@/views/staples/rice/index.vue'),
      meta: {
        title: t('routes.staples.rice'),
      },
    },
    {
      path: '/bun',
      name: 'bun',
      component: () => import('/@/views/staples/bun/index.vue'),
      meta: {
        title: t('routes.staples.bun'),
      },
    },
    {
      path: '/cake',
      name: 'cake',
      component: () => import('/@/views/staples/cake/index.vue'),
      meta: {
        title: t('routes.staples.cake'),
      },
    },
    {
      path: '/noodle',
      name: 'noodle',
      component: () => import('/@/views/staples/noodle/index.vue'),
      meta: {
        title: t('routes.staples.noodle'),
      },
    },
    {
      path: '/flour',
      name: 'flour',
      component: () => import('/@/views/staples/flour/index.vue'),
      meta: {
        title: t('routes.staples.flour'),
      },
    },
    {
      path: '/know',
      name: 'know',
      component: () => import('/@/views/staples/know/index.vue'),
      meta: {
        title: t('routes.staples.know'),
      },
    },
    {
      path: '/flatcake',
      name: 'flatcake',
      component: () => import('/@/views/staples/flatcake/index.vue'),
      meta: {
        title: t('routes.staples.flatcake'),
      },
    },
    {
      path: '/pastry',
      name: 'pastry',
      component: () => import('/@/views/staples/pastry/index.vue'),
      meta: {
        title: t('routes.staples.pastry'),
      },
    },
    {
      path: '/potHelmet',
      name: 'potHelmet',
      component: () => import('/@/views/staples/potHelmet/index.vue'),
      meta: {
        title: t('routes.staples.potHelmet'),
      },
    },
    {
      path: '/dumpling',
      name: 'dumpling',
      component: () => import('/@/views/staples/dumpling/index.vue'),
      meta: {
        title: t('routes.staples.dumpling'),
      },
    },
    {
      path: '/ricedumplings',
      name: 'ricedumplings',
      component: () => import('/@/views/staples/ricedumplings/index.vue'),
      meta: {
        title: t('routes.staples.ricedumplings'),
      },
    },
    {
      path: '/siuMai',
      name: 'siuMai',
      component: () => import('/@/views/staples/siuMai/index.vue'),
      meta: {
        title: t('routes.staples.siuMai'),
      },
    },
    {
      path: '/soup',
      name: 'soup',
      component: () => import('/@/views/staples/soup/index.vue'),
      meta: {
        title: t('routes.staples.soup'),
      },
    },
    {
      path: '/gruel',
      name: 'gruel',
      component: () => import('/@/views/staples/gruel/index.vue'),
      meta: {
        title: t('routes.staples.gruel'),
      },
    },
  ],
};

export default staples;
