import { ref } from 'vue';
import { cityList } from '../../../common/citySort';
import { FormSchema } from '/@/components/Form/src/types/form';
import { areaOptions, chinaAreaProvince, cityLevelOptions } from '/@/common/chinaEveryAreaData';

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
            provinceOptions.value = cityList.filter((item) => item.value === name);
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
