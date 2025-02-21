import type { DistrictItem } from '/#/store';
import { defineStore } from 'pinia';
import { store } from '/@/store';
// import { GetMapInfoModel, LoginParams } from '/@/api/sys/model/userModel';
import { ref } from 'vue';
import axios from 'axios';
// const A_MAP_URL = 'https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b';
// script.src =`https://webapi.amap.com/maps?v=2.0&key=497e8ce890613e86af0ef296b41b8030&plugin=${plugin}&callback=initAMap`;
// d7bb98e7185300250dd5f918c12f484b用于restapi时不可用
// 352ccea64943e74f69bdc4597aff13ef  || 497e8ce890613e86af0ef296b41b8030 可用
const AMAP_KEY = '352ccea64943e74f69bdc4597aff13ef'; // 您的高德Web服务API密钥,需要替换成您的密钥
const loading = ref(false);

interface MapState {
  districtDataMain: DistrictItem[];
  districtData: DistrictItem[];
}
const prefixUrl = 'https://restapi.amap.com/v3/config/district';

export const useMapStore = defineStore({
  id: 'app-map',
  state: (): MapState => ({
    districtDataMain: [],
    districtData: [],
  }),
  getters: {
    getMainMapInfo(): DistrictItem[] {
      return this.districtDataMain || [];
    },
    getMapInfo(): DistrictItem[] {
      return this.districtData || [];
    },
  },
  actions: {
    setMainMapInfo(map: Array<DistrictItem> | undefined) {
      this.districtDataMain = map ? map : []; // for null or undefined value
    },
    setMapInfo(map: Array<DistrictItem> | undefined) {
      this.districtData = map ? map : []; // for null or undefined value
    },
    resetState() {
      this.districtDataMain = [];
      this.districtData = [];
    },

    /**
     * 查询行政区数据
     * @param {string} country - 国家名称，默认为'中国'
     * @param {number} subdistrict - 子行政区级别，默认为2
     * @param {boolean} isAll - 是否获取所有行政区数据，默认为false
     */
    async queryDistricts(country = '中国', subdistrict = 2, isAll = false) {
      // 开始加载数据，设置loading状态为true
      loading.value = true;
      try {
        try {
          // 发送请求获取行政区数据
          const { data } = await axios.get(
            `${prefixUrl}?keywords=${country}&subdistrict=${subdistrict}&key=${AMAP_KEY}`,
          );
          // const result = (await this.formatDistricts(data.districts?.[0]?.districts)) || [];
          // console.log('result222222', result);
          // 如果不需要获取所有行政区数据，设置主行政区数据
          if (!isAll) {
            this.setMainMapInfo(data.districts?.[0]?.districts || []);
          }
          // 如果需要获取所有行政区数据且请求成功
          if (data.status === '1' && data.districts?.[0]?.districts && isAll) {
            // 递归获取所有子行政区数据
            const list = await Promise.all(
              data.districts[0].districts.map(async (item: any) => ({
                // 展开当前行政区的所有属性
                ...item,
                // 递归获取当前行政区的子行政区数据
                districts: await this.getSubDistricts(item.adcode),
              })),
            );
            // 设置所有行政区数据
            this.setMapInfo(list);
          }
        } catch (error) {
          // 打印获取行政区数据失败的错误信息
          console.error('获取行政区数据失败:', error);
        } finally {
          // 无论请求成功还是失败，都将loading状态设置为false
          loading.value = false;
        }
      } finally {
        // 确保loading状态最终被设置为false
        loading.value = false;
      }
    },
    // async formatDistricts(data: any) {
    //   if (!data) return [];

    //   return Promise.all(
    //     data.map(async (item: any) => {
    //       const district: DistrictItem = {
    // value: item.adcode,
    // label: item.name,
    // children: item.districts,
    //         adcode: item.adcode,
    //         center: item.center,
    //         citycode: item.citycode,
    //         level: item.level,
    //         name: item.name,
    //       };

    // if (item.districts?.length > 0) {
    //   district.children = await this.formatDistricts(item.districts);
    // }

    //       return district;
    //     }),
    //   );
    // },

    /**
     * 递归获取指定行政区的下级行政区数据
     * @param {string} adcode - 行政区编码
     * @returns {Promise<DistrictItem[]>} - 包含下级行政区数据的Promise
     */
    async getSubDistricts(adcode: string): Promise<DistrictItem[]> {
      try {
        // 发送请求获取指定行政区的下级行政区数据
        const { data } = await axios.get(
          `${prefixUrl}?keywords=${adcode}&subdistrict=1&key=${AMAP_KEY}`,
        );
        // 检查请求是否成功且返回了有效的行政区数据
        if (data.status === '1' && data.districts?.[0]?.districts) {
          // 对每个下级行政区数据进行处理
          const children = await Promise.all(
            data.districts[0].districts.map(async (item: any) => {
              // 创建一个行政区对象，包含当前行政区的所有属性
              const district: DistrictItem = {
                ...item,
                // 如果当前行政区的级别不是街道，则递归获取其下级行政区数据
                districts: item.level !== 'street' ? await this.getSubDistricts(item.adcode) : [],
              };

              return district;
            }),
          );
          return children;
        }
        // 如果请求失败或没有有效的行政区数据，返回空数组
        return [];
      } catch (error) {
        // 打印获取下级行政区数据失败的错误信息
        console.error('获取下级行政区失败:', error);
        // 返回空数组
        return [];
      }
    },
  },
});

// Need to be used outside the setup
export function useMapStoreWithOut() {
  return useMapStore(store);
}
