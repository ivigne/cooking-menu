import type { IndustryInfo } from '/#/store';
import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { PageEnum } from '/@/enums/pageEnum';
import { USER_INFO_KEY } from '/@/enums/cacheEnum';
import { setAuthCache } from '/@/utils/auth';
import { GetIndustryInfoModel, LoginParams } from '/@/api/sys/model/industryModel';
import { getIndustryInfo, loginApi } from '/@/api/sys/industry';
import { useI18n } from '/@/hooks/web/useI18n';
import { useMessage } from '/@/hooks/web/useMessage';
import { router } from '/@/router';
import { usePermissionStore } from '/@/store/modules/permission';
import { RouteRecordRaw } from 'vue-router';
import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';
// import { isArray } from '/@/utils/is';
import { h } from 'vue';
// 行业分类-对接boss行业分类接口
export enum IndustryCategoryEnum {
  BEVERAGE = 'beverage',
  SNACK = 'snack',
  NUT = 'nut',
  FISH = 'fish',
  MEAT = 'meat',
  SEAFOOD = 'seafood',
  VEGETABLE = 'vegetable',
  FRUIT = 'fruit',
  DRINK = 'drink',
}

interface IndustryState {
  industryCategory: IndustryCategoryEnum;
  industryCategoryList: IndustryCategoryEnum[];
}

export const useIndustryStore = defineStore({
  id: 'app-industry',
  state: (): IndustryState => ({
    // 行业分类
    industryCategory: IndustryCategoryEnum.BEVERAGE,
    industryCategoryList: [],
  }),
  getters: {
    getIndustryCategory(): IndustryCategoryEnum {
      return this.industryCategory;
    },
  },
  actions: {
    setIndustryInfo(info: IndustryInfo | null) {
      // this.industryInfo = info;
      setAuthCache(USER_INFO_KEY, info);
    },
    resetState() {
      // this.industryInfo = null;
      // this.token = '';
      // this.roleList = [];
    },
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      },
    ): Promise<GetIndustryInfoModel | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);
        console.log(data);
        return this.afterLoginAction(goHome);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async afterLoginAction(goHome?: boolean): Promise<GetIndustryInfoModel | null> {
      // get industry info
      const industryInfo = await this.getIndustryInfoAction();

      // const sessionTimeout = this.sessionTimeout;
      // if (sessionTimeout) {
      //   this.setSessionTimeout(false);
      // } else {
      const permissionStore = usePermissionStore();
      if (!permissionStore.isDynamicAddedRoute) {
        const routes = await permissionStore.buildRoutesAction();
        routes.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw);
        });
        router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);
        permissionStore.setDynamicAddedRoute(true);
      }
      goHome && (await router.replace(industryInfo?.homePath || PageEnum.BASE_HOME));
      // }
      return industryInfo;
    },

    async getIndustryInfoAction(): Promise<IndustryInfo | null> {
      const industryInfo = await getIndustryInfo();
      this.setIndustryInfo(industryInfo);
      return industryInfo;
    },
    /**
     * @description: logout
     */
    async logout(goLogin = false) {
      this.setIndustryInfo(null);
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: 'warning',
        title: () => h('span', t('sys.app.logoutTip')),
        content: () => h('span', t('sys.app.logoutMessage')),
        onOk: async () => {
          await this.logout(true);
        },
      });
    },
  },
});

// Need to be used outside the setup
export function useIndustryStoreWithOut() {
  return useIndustryStore(store);
}
