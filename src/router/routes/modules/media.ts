// 多媒体系列
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const media: AppRouteModule = {
  path: '/media',
  name: 'media',
  component: LAYOUT,
  redirect: '/media/anime',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.media.media'),
  },
  children: [
    {
      path: '/anime',
      name: 'anime',
      component: () => import('/@/views/media/anime/index.vue'),
      meta: {
        title: t('routes.media.anime'),
      },
    },
    {
      path: 'archaeology',
      name: 'ProcessData',
      component: () => import('/@/views/media/archaeology/index.vue'),
      meta: {
        title: t('routes.media.archaeology'),
      },
    },
    {
      path: 'game',
      name: 'game',
      component: () => import('/@/views/media/game/index.vue'),
      meta: {
        title: t('routes.media.game'),
      },
    },
    {
      path: 'movie',
      name: 'movie',
      component: () => import('/@/views/media/movie/index.vue'),
      meta: {
        title: t('routes.media.movie'),
      },
    },
    {
      path: 'tv',
      name: 'tv',
      component: () => import('/@/views/media/tv/index.vue'),
      meta: {
        title: t('routes.media.tv'),
      },
    },
  ],
};

export default media;
