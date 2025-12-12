import { ref } from 'vue';
import { FormSchema } from '/@/components/Form/src/types/form';
import { areaOptions, chinaAreaProvince, cityLevelOptions } from '/@/common/chinaEveryAreaData';
import { useMapStore } from '/@/store/modules/map';
const mapStore = useMapStore();
// 直聘的行业接口文档
// https://histatic.zhipin.com/front/bosshi-mp-docs/service/ready/apiCall/callProcess/callApi.html#%E5%9F%BA%E6%9C%AC%E8%A6%81%E6%B1%82
export const provinceOptions = ref<any[]>([]);
export const formSchemas: () => FormSchema[] = () => [
  {
    field: 'bigArea',
    component: 'Select',
    label: '地区选择',
    required: true,
    componentProps: ({ formModel }) => {
      return {
        options: areaOptions,
        onChange: (value: string) => {
          chinaAreaProvince[value].map((name) => {
            formModel.province = null;
            provinceOptions.value = mapStore.districtDataMain.filter((item) => item.name === name);
            console.log(name, provinceOptions.value);
          });
        },
      };
    },
  },
  {
    field: 'province',
    component: 'Cascader',
    label: '区域对应的省份',
    required: true,
    componentProps: () => {
      return {
        options: provinceOptions.value,
      };
    },
  },
  {
    field: 'cityLevel',
    component: 'Select',
    label: '城市级别',
    required: true,
    componentProps: () => {
      return {
        options: cityLevelOptions.value,
      };
    },
  },
];
