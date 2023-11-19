/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-11-15 11:51:08
 * @FilePath: /cooking-menu/src/router/routes/modules/more.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 啥都有
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const more: AppRouteModule = {
  path: '/more',
  name: 'more',
  component: LAYOUT,
  redirect: '/more/randomOrder',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.more.more'),
  },
  children: [
    {
      path: 'dipping',
      name: 'dipping',
      component: () => import('/@/views/more/dipping/index.vue'),
      meta: {
        title: t('routes.more.dipping'),
      },
    },
    {
      path: '/ingredientsTypes',
      name: 'ingredientsTypes',
      component: () => import('/@/views/more/ingredientsTypes/index.vue'),
      meta: {
        title: t('routes.more.ingredientsTypes'),
      },
    },
    {
      path: '/kitchenware',
      name: 'kitchenware',
      component: () => import('/@/views/more/kitchenware/index.vue'),
      meta: {
        title: t('routes.more.kitchenware'),
      },
    },
    {
      path: '/orphaned',
      name: 'orphaned',
      component: () => import('/@/views/more/orphaned/index.vue'),
      meta: {
        title: t('routes.more.orphaned'),
      },
    },
    {
      path: '/spice',
      name: 'spice',
      component: () => import('/@/views/more/spice/index.vue'),
      meta: {
        title: t('routes.more.spice'),
      },
    },
    {
      path: '/dessert',
      name: 'dessert',
      component: () => import('/@/views/more/dessert/index.vue'),
      meta: {
        title: t('routes.more.dessert'),
      },
    },
    {
      path: '/essert',
      name: 'essert',
      component: () => import('/@/views/more/essert/index.vue'),
      meta: {
        title: t('routes.more.essert'),
      },
    },
    {
      path: '/sugar',
      name: 'sugar',
      component: () => import('/@/views/more/sugar/index.vue'),
      meta: {
        title: t('routes.more.sugar'),
      },
    },
    {
      path: '/chutney',
      name: 'chutney',
      component: () => import('/@/views/more/chutney/index.vue'),
      meta: {
        title: t('routes.more.chutney'),
      },
    },
    {
      path: '/tea',
      name: 'tea',
      component: () => import('/@/views/more/tea/index.vue'),
      meta: {
        title: t('routes.more.tea'),
      },
    },
    {
      path: '/wine',
      name: 'wine',
      component: () => import('/@/views/more/wine/index.vue'),
      meta: {
        title: t('routes.more.wine'),
      },
    },
    {
      path: '/meatballs',
      name: 'meatballs',
      component: () => import('/@/views/more/meatballs/index.vue'),
      meta: {
        title: t('routes.more.meatballs'),
      },
    },
    {
      path: '/flavoring',
      name: 'flavoring',
      component: () => import('/@/views/more/flavoring/index.vue'),
      meta: {
        title: t('routes.more.flavoring'),
      },
    },
  ],
};

export default more;
