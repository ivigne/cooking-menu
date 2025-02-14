<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2025-02-13 17:11:29
 * @FilePath: /cooking-menu/src/components/AmapDistrictQuery/index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="district-query">
    <a-space>
      <a-button @click="queryDistrictsFn">获取最新行政区数据</a-button>
      <a-button @click="exportData" :disabled="!districtData.length">导出数据</a-button>
    </a-space>

    <div v-if="loading" class="loading">
      <a-spin />
    </div>

    <div v-else-if="districtData.length" class="data-preview">
      <pre>{{ JSON.stringify(districtData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { queryDistricts, districtData } from '/@/common/getMap';

  const loading = ref(false);

  const queryDistrictsFn = async () => {
    loading.value = true;
    await queryDistricts('中国', 2, false);
    loading.value = false;
  };

  // 导出数据
  const exportData = () => {
    const dataStr = JSON.stringify(districtData.value, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'district-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
</script>

<style scoped>
  .district-query {
    padding: 20px;
  }

  .loading {
    margin-top: 20px;
    text-align: center;
  }

  .data-preview {
    margin-top: 20px;
    max-height: 600px;
    overflow: auto;
    padding: 16px;
    background: #f5f5f5;
    border-radius: 4px;
  }
</style>
