import axios from 'axios';
import { ref } from 'vue';

interface DistrictItem {
  code: string;
  value: string;
  children?: DistrictItem[];
}
// const A_MAP_URL = 'https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b';
// script.src =`https://webapi.amap.com/maps?v=2.0&key=497e8ce890613e86af0ef296b41b8030&plugin=${plugin}&callback=initAMap`;
// d7bb98e7185300250dd5f918c12f484b用于restapi时不可用
// 352ccea64943e74f69bdc4597aff13ef  || 497e8ce890613e86af0ef296b41b8030 可用
const AMAP_KEY = '352ccea64943e74f69bdc4597aff13ef'; // 您的高德Web服务API密钥,需要替换成您的密钥
const loading = ref(false);
export const districtDataMain = ref<any[]>([]);
export const districtData = ref<DistrictItem[]>([]);

// 递归获取下级行政区
export const getSubDistricts = async (adcode: string): Promise<DistrictItem[]> => {
  try {
    const { data } = await axios.get(
      `https://restapi.amap.com/v3/config/district?keywords=${adcode}&subdistrict=1&key=${AMAP_KEY}`,
    );
    if (data.status === '1' && data.districts?.[0]?.districts) {
      const children = await Promise.all(
        data.districts[0].districts.map(async (item: any) => {
          const district: DistrictItem = {
            code: item.adcode,
            value: item.name,
          };

          if (item.level !== 'street') {
            district.children = await getSubDistricts(item.adcode);
          }

          return district;
        }),
      );
      return children;
    }
    return [];
  } catch (error) {
    console.error('获取下级行政区失败:', error);
    return [];
  }
};
// 获取所有行政区数据
export const queryDistricts = async (country = '中国', subdistrict = 2, isAll = false) => {
  loading.value = true;
  try {
    const { data } = await axios.get(
      `https://restapi.amap.com/v3/config/district?keywords=${country}&subdistrict=${subdistrict}&key=${AMAP_KEY}`,
    );
    districtDataMain.value = data.districts?.[0]?.districts || [];
    console.log('data', data, districtDataMain.value);
    if (data.status === '1' && data.districts?.[0]?.districts && isAll) {
      districtData.value = await Promise.all(
        data.districts[0].districts.map(async (item: any) => ({
          code: item.adcode,
          value: item.name,
          children: await getSubDistricts(item.adcode),
        })),
      );
    }
  } catch (error) {
    console.error('获取行政区数据失败:', error);
  } finally {
    loading.value = false;
  }
};
