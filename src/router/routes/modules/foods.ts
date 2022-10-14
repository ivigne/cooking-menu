/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-10-13 11:59:00
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-13 12:04:10
 * @FilePath: /cooking-menu/src/router/routes/modules/foods.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/foods',
  name: 'Foods',
  component: LAYOUT,
  redirect: '/foods/details',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.basic.foodsDetail'),
    orderNo: 100000,
  },
  children: [
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('/@/views/foods/details/index.vue'),
      meta: {
        title: t('routes.basic.foodsDetail'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
    {
      path: '/scripts',
      name: 'Scripts',
      component: () => import('/@/views/foods/scripts/index.vue'),
      meta: {
        title: t('routes.basic.foodsScripts'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
