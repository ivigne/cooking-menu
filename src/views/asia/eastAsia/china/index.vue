import { ref } from 'vue';
<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-24 09:46:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-20 13:34:48
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FoodsTable :objData="chinaTableData" type="china" />
  </div>
</template>
<script lang="ts">
  export default {
    name: 'EastAsiaChina',
  };
</script>
<script lang="ts" setup>
  // import {
  //   cityList,
  //   handleSort,
  //   sichuanProvinceCitySort,
  //   guizhouProvinceCitySort,
  //   shanxiProvinceCitySort,
  //   anhuiProvinceCitySort,
  //   fujianProvinceCitySort,
  //   shandongProvinceCitySort,
  //   hubeiProvinceCitySort,
  //   hunanProvinceCitySort,
  //   liaoningProvinceCitySort,
  //   jilinProvinceCitySort,
  //   heilongjiangProvinceCitySort,
  //   ningxiaProvinceCitySort,
  //   qinghaiProvinceCitySort,
  //   xinjiangProvinceCitySort,
  //   hainanProvinceCitySort,
  //   jiangsuProvinceCitySort,
  //   zhejiangProvinceCitySort,
  //   xizangProvinceCitySort,
  //   jiangxiProvinceCitySort,
  //   shannxiProvinceCitySort,
  //   gansuProvinceCitySort,
  //   hebeiProvinceCitySort,
  //   guangxiProvinceCitySort,
  //   yunnanProvinceCitySort,
  // } from '/@/common/country/citySort';
  import { chinaTableData } from './data';
  import FoodsTable from '/@/views/components/foodsTable.vue';
  import { useMapStore } from '/@/store/modules/map';
  // const { t } = useI18n();
  const mapStore = useMapStore();
  // handleSort(heilongjiangProvinceCitySort, cityList[3].districts);
  // handleSort(xinjiangProvinceCitySort, cityList[4].districts);
  // handleSort(hubeiProvinceCitySort, cityList[5].districts);
  // handleSort(liaoningProvinceCitySort, cityList[6].districts);
  // handleSort(shandongProvinceCitySort, cityList[7].districts);
  // handleSort(shannxiProvinceCitySort, cityList[8].districts);
  // handleSort(guizhouProvinceCitySort, cityList[10].districts);
  // handleSort(anhuiProvinceCitySort, cityList[12].districts);
  // handleSort(fujianProvinceCitySort, cityList[13].districts);
  // handleSort(hunanProvinceCitySort, cityList[14].districts);
  // handleSort(hainanProvinceCitySort, cityList[15].districts);
  // handleSort(jiangsuProvinceCitySort, cityList[16].districts);
  // handleSort(qinghaiProvinceCitySort, cityList[17].districts);
  // handleSort(guangxiProvinceCitySort, cityList[18].districts);
  // handleSort(ningxiaProvinceCitySort, cityList[19].districts);
  // handleSort(zhejiangProvinceCitySort, cityList[20].districts);
  // handleSort(hebeiProvinceCitySort, cityList[21].districts);
  // handleSort(heiLongJiangFoodsList, cityList[22].districts);
  // handleSort(heiLongJiangFoodsList, cityList[23].districts);
  // handleSort(heiLongJiangFoodsList, cityList[24].districts);
  // handleSort(gansuProvinceCitySort, cityList[25].districts);
  // handleSort(sichuanProvinceCitySort, cityList[26].districts);
  // handleSort(heiLongJiangFoodsList, cityList[27].districts);
  // handleSort(heiLongJiangFoodsList, cityList[28].districts);
  // handleSort(xizangProvinceCitySort, cityList[29].districts);
  // handleSort(jilinProvinceCitySort, cityList[30].districts);
  // handleSort(jiangxiProvinceCitySort, cityList[31].districts);
  // handleSort(shanxiProvinceCitySort, cityList[32].districts);
  // handleSort(yunnanProvinceCitySort, cityList[33].districts);

  let sum = 0;
  mapStore.districtDataMain.map((item) => {
    console.log(`${item.name}: 有${item['districts'].length}个城市`);
    sum += item['districts'].length;
  });
  console.log(`一共有${sum}个城市`);
  // const tableData = ref([]);
  // tableData.value = chinaTableData['siChuan'];
  // const handleProvince = (code) => {
  //   console.log('handleProvince', code, chinaTableData[code]);
  //   tableData.value = chinaTableData[code];
  // };
</script>
