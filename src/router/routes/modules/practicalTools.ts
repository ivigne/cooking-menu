/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-08-07 17:19:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-08-06 09:22:02
 * @FilePath: /cooking-menu/src/router/routes/modules/practicalTools.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

// const randomOrder: AppRouteModule = {
//   path: '/randomOrder',
//   name: 'randomOrder',
//   // component: LAYOUT,
//   // redirect: '/randomOrder/index',
//   component: () => import('/@/views/randomOrder/index.vue'),
//   meta: {
//     hideChildrenInMenu: true,
//     icon: 'simple-icons:randomOrder-dot-me',
//     title: t('routes.tools.randomOrder'),
//     // orderNo: 100000,
//   },
// };

// export default randomOrder;

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const tools: AppRouteModule = {
  path: '/tools',
  name: 'tools',
  component: LAYOUT,
  redirect: '/tools/randomOrder',
  meta: {
    orderNo: 6,
    icon: 'ion:grid-outline',
    title: t('routes.tools.tools'),
  },
  children: [
    {
      path: '/randomOrder',
      name: 'randomOrder',
      component: () => import('/@/views/tools/randomOrder/index.vue'),
      meta: {
        title: t('routes.tools.randomOrder'),
      },
    },
    {
      path: 'processData',
      name: 'ProcessData',
      component: () => import('/@/views/tools/processData/index.vue'),
      meta: {
        title: t('routes.tools.processData'),
      },
    },
    {
      path: 'codeGeneration',
      name: 'CodeGeneration',
      component: () => import('/@/views/tools/codeGeneration/index.vue'),
      meta: {
        title: t('routes.tools.codeGeneration'),
      },
    },
    {
      path: 'areaQuery',
      name: 'AreaQuery',
      component: () => import('/@/views/tools/areaQuery/index.vue'),
      meta: {
        title: t('routes.tools.areaQuery'),
      },
    },
    {
      path: 'capitaCalc',
      name: 'CapitaCalc',
      component: () => import('/@/views/tools/capitaCalc/index.vue'),
      meta: {
        title: t('routes.tools.capitaCalc'),
      },
    },
    {
      path: 'nutritionCalc',
      name: 'NutritionCalc',
      component: () => import('/@/views/tools/nutritionCalc/index.vue'),
      meta: {
        title: t('routes.tools.nutritionCalc'),
      },
    },
  ],
};

export default tools;
