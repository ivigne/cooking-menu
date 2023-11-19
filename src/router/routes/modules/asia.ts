import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const asia: AppRouteModule = {
  path: '/asia',
  name: 'Asia',
  component: LAYOUT,
  // redirect: '/asia/eastAsia',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.asia.asia'),
  },
  children: [
    {
      path: 'eastAsia',
      name: 'EastAsia',
      // redirect: '/asia/eastAsia/china',
      meta: {
        title: t('routes.asia.eastAsia'),
      },
      children: [
        {
          path: 'china',
          name: 'China',
          component: () => import('/@/views/asia/eastAsia/china/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.asia.china'),
          },
        },
        // {
        //   path: 'mongolia',
        //   name: 'mongolia',
        //   component: () => import('/@/views/asia/eastAsia/mongolia/index.vue'),
        //   meta: {
        //     // affix: true,
        //     title: t('routes.asia.mongolia'),
        //   },
        // },
        // {
        //   path: 'northKorea',
        //   name: 'northKorea',
        //   component: () => import('/@/views/asia/eastAsia/northKorea/index.vue'),
        //   meta: {
        //     // affix: true,
        //     title: t('routes.asia.northKorea'),
        //   },
        // },
        // {
        //   path: 'southKorea',
        //   name: 'southKorea',
        //   component: () => import('/@/views/asia/eastAsia/southKorea/index.vue'),
        //   meta: {
        //     // affix: true,
        //     title: t('routes.asia.southKorea'),
        //   },
        // },
        // {
        //   path: 'japan',
        //   name: 'japan',
        //   component: () => import('/@/views/asia/eastAsia/japan/index.vue'),
        //   meta: {
        //     // affix: true,
        //     title: t('routes.asia.japan'),
        //   },
        // },
      ],
    },
    // {
    //   path: 'southeastAsia',
    //   name: 'southeastAsia',
    //   redirect: '/asia/southeastAsia/china',
    //   meta: {
    //     title: t('routes.asia.southeastAsia'),
    //   },
    //   children: [
    //     {
    //       path: 'philippines',
    //       name: 'philippines',
    //       component: () => import('/@/views/asia/southeastAsia/philippines/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.philippines'),
    //       },
    //     },
    //     {
    //       path: 'vietnam',
    //       name: 'vietnam',
    //       component: () => import('/@/views/asia/southeastAsia/vietnam/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.vietnam'),
    //       },
    //     },
    //     {
    //       path: 'laos',
    //       name: 'laos',
    //       component: () => import('/@/views/asia/southeastAsia/laos/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.laos'),
    //       },
    //     },
    //     {
    //       path: 'cambodia',
    //       name: 'cambodia',
    //       component: () => import('/@/views/asia/southeastAsia/cambodia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.cambodia'),
    //       },
    //     },
    //     {
    //       path: 'myanmar',
    //       name: 'myanmar',
    //       component: () => import('/@/views/asia/southeastAsia/myanmar/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.myanmar'),
    //       },
    //     },
    //     {
    //       path: 'thailand',
    //       name: 'thailand',
    //       component: () => import('/@/views/asia/southeastAsia/thailand/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.thailand'),
    //       },
    //     },
    //     {
    //       path: 'malaysia',
    //       name: 'malaysia',
    //       component: () => import('/@/views/asia/southeastAsia/malaysia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.malaysia'),
    //       },
    //     },
    //     {
    //       path: 'brunei',
    //       name: 'brunei',
    //       component: () => import('/@/views/asia/southeastAsia/brunei/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.brunei'),
    //       },
    //     },
    //     {
    //       path: 'singapore',
    //       name: 'singapore',
    //       component: () => import('/@/views/asia/southeastAsia/singapore/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.singapore'),
    //       },
    //     },
    //     {
    //       path: 'indonesia',
    //       name: 'indonesia',
    //       component: () => import('/@/views/asia/southeastAsia/indonesia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.indonesia'),
    //       },
    //     },
    //     {
    //       path: 'timorLeste',
    //       name: 'timorLeste',
    //       component: () => import('/@/views/asia/southeastAsia/timorLeste/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.timorLeste'),
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'southAsia',
    //   name: 'southAsia',
    //   redirect: '/asia/southAsia/nepal',
    //   meta: {
    //     title: t('routes.asia.southAsia'),
    //   },
    //   children: [
    //     {
    //       path: 'nepal',
    //       name: 'nepal',
    //       component: () => import('/@/views/asia/southAsia/nepal/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.nepal'),
    //       },
    //     },
    //     {
    //       path: 'bhutan',
    //       name: 'bhutan',
    //       component: () => import('/@/views/asia/southAsia/bhutan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.bhutan'),
    //       },
    //     },
    //     {
    //       path: 'bangladesh',
    //       name: 'bangladesh',
    //       component: () => import('/@/views/asia/southAsia/bangladesh/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.bangladesh'),
    //       },
    //     },
    //     {
    //       path: 'india',
    //       name: 'india',
    //       component: () => import('/@/views/asia/southAsia/india/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.india'),
    //       },
    //     },
    //     {
    //       path: 'pakistan',
    //       name: 'pakistan',
    //       component: () => import('/@/views/asia/southAsia/pakistan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.pakistan'),
    //       },
    //     },
    //     {
    //       path: 'sriLanka',
    //       name: 'sriLanka',
    //       component: () => import('/@/views/asia/southAsia/sriLanka/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.sriLanka'),
    //       },
    //     },
    //     {
    //       path: 'maldivesMaldives',
    //       name: 'maldivesMaldives',
    //       component: () => import('/@/views/asia/southAsia/maldivesMaldives/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.maldivesMaldives'),
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'centralAsia',
    //   name: 'centralAsia',
    //   redirect: '/asia/centralAsia/kazakhstan',
    //   meta: {
    //     title: t('routes.asia.centralAsia'),
    //   },
    //   children: [
    //     {
    //       path: 'kazakhstan',
    //       name: 'kazakhstan',
    //       component: () => import('/@/views/asia/centralAsia/kazakhstan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.kazakhstan'),
    //       },
    //     },
    //     {
    //       path: 'kazakhstan',
    //       name: 'kazakhstan',
    //       component: () => import('/@/views/asia/centralAsia/kazakhstan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.kazakhstan'),
    //       },
    //     },
    //     {
    //       path: 'kyrgyzstan',
    //       name: 'kyrgyzstan',
    //       component: () => import('/@/views/asia/centralAsia/kyrgyzstan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.kyrgyzstan'),
    //       },
    //     },
    //     {
    //       path: 'tajikistan',
    //       name: 'tajikistan',
    //       component: () => import('/@/views/asia/centralAsia/tajikistan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.tajikistan'),
    //       },
    //     },
    //     {
    //       path: 'uzbekistan',
    //       name: 'uzbekistan',
    //       component: () => import('/@/views/asia/centralAsia/uzbekistan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.uzbekistan'),
    //       },
    //     },
    //     {
    //       path: 'turkmenistan',
    //       name: 'turkmenistan',
    //       component: () => import('/@/views/asia/centralAsia/turkmenistan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.turkmenistan'),
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'westAsia',
    //   name: 'westAsia',
    //   redirect: '/asia/westAsia/afghanistan',
    //   meta: {
    //     title: t('routes.asia.westAsia'),
    //   },
    //   children: [
    //     {
    //       path: 'afghanistan',
    //       name: 'afghanistan',
    //       component: () => import('/@/views/asia/westAsia/afghanistan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.afghanistan'),
    //       },
    //     },
    //     {
    //       path: 'iraq',
    //       name: 'iraq',
    //       component: () => import('/@/views/asia/westAsia/iraq/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.iraq'),
    //       },
    //     },
    //     {
    //       path: 'iran',
    //       name: 'iran',
    //       component: () => import('/@/views/asia/westAsia/iran/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.iran'),
    //       },
    //     },
    //     {
    //       path: 'syria',
    //       name: 'syria',
    //       component: () => import('/@/views/asia/westAsia/syria/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.syria'),
    //       },
    //     },
    //     {
    //       path: 'jordan',
    //       name: 'jordan',
    //       component: () => import('/@/views/asia/westAsia/jordan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.jordan'),
    //       },
    //     },
    //     {
    //       path: 'lebanon',
    //       name: 'lebanon',
    //       component: () => import('/@/views/asia/westAsia/lebanon/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.lebanon'),
    //       },
    //     },
    //     {
    //       path: 'israel',
    //       name: 'israel',
    //       component: () => import('/@/views/asia/westAsia/israel/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.israel'),
    //       },
    //     },
    //     {
    //       path: 'palestine',
    //       name: 'palestine',
    //       component: () => import('/@/views/asia/westAsia/palestine/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.palestine'),
    //       },
    //     },
    //     {
    //       path: 'saudiArabia',
    //       name: 'saudiArabia',
    //       component: () => import('/@/views/asia/westAsia/saudiArabia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.saudiArabia'),
    //       },
    //     },
    //     {
    //       path: 'bahrain',
    //       name: 'bahrain',
    //       component: () => import('/@/views/asia/westAsia/bahrain/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.bahrain'),
    //       },
    //     },
    //     {
    //       path: 'qatar',
    //       name: 'qatar',
    //       component: () => import('/@/views/asia/westAsia/qatar/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.qatar'),
    //       },
    //     },
    //     {
    //       path: 'kuwait',
    //       name: 'kuwait',
    //       component: () => import('/@/views/asia/westAsia/kuwait/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.kuwait'),
    //       },
    //     },
    //     {
    //       path: 'unitedArabEmirates',
    //       name: 'unitedArabEmirates',
    //       component: () => import('/@/views/asia/westAsia/unitedArabEmirates/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.unitedArabEmirates'),
    //       },
    //     },
    //     {
    //       path: 'oman',
    //       name: 'oman',
    //       component: () => import('/@/views/asia/westAsia/oman/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.oman'),
    //       },
    //     },
    //     {
    //       path: 'yemen',
    //       name: 'yemen',
    //       component: () => import('/@/views/asia/westAsia/yemen/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.yemen'),
    //       },
    //     },
    //     {
    //       path: 'georgia',
    //       name: 'georgia',
    //       component: () => import('/@/views/asia/westAsia/georgia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.georgia'),
    //       },
    //     },
    //     {
    //       path: 'armenia',
    //       name: 'armenia',
    //       component: () => import('/@/views/asia/westAsia/armenia/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.armenia'),
    //       },
    //     },
    //     {
    //       path: 'azerbaijan',
    //       name: 'azerbaijan',
    //       component: () => import('/@/views/asia/westAsia/azerbaijan/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.azerbaijan'),
    //       },
    //     },
    //     {
    //       path: 'turkey',
    //       name: 'turkey',
    //       component: () => import('/@/views/asia/westAsia/turkey/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.turkey'),
    //       },
    //     },
    //     {
    //       path: 'cyprus',
    //       name: 'cyprus',
    //       component: () => import('/@/views/asia/westAsia/cyprus/index.vue'),
    //       meta: {
    //         // affix: true,
    //         title: t('routes.asia.cyprus'),
    //       },
    //     },
    //   ],
    // },
  ],
};

export default asia;
