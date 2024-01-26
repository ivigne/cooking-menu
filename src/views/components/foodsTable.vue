<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-12-21 17:22:35
 * @FilePath: /cooking-menu/src/views/components/foodsTable.vue
 * @Description: 美食搜索，列表页
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <!-- <BasicTable @register="registerTable" /> -->
    <VxeBasicTable
      ref="tableRef"
      v-bind="gridOptions"
      @checkbox-change="onSelectChange"
      @checkbox-all="onSelectChange"
    >
      <template #action="{ row }">
        <TableAction outside :actions="createActions(row)" />
      </template>
    </VxeBasicTable>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'FoodsTable',
  };
</script> -->
<script lang="ts" setup>
  // import { BasicTable, useTable } from '/@/components/Table';
  import { ref, unref, toRefs, watch, reactive, onMounted } from 'vue';
  import { formConfig, tableColumnsConfig, provinceCode } from '/@/common/commonConfig';
  import { VxeBasicTable, BasicTableProps, CustomVxeGridInstance } from '/@/components/VxeTable';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { ActionItem, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { router } from '/@/router';
  const tableRef = ref<CustomVxeGridInstance>();

  const { t } = useI18n();
  // const { createConfirm, createMessage } = useMessage();
  const props = defineProps({
    data: ref([]),
    type: ref(''),
  });
  console.log(props.data);
  const { data, type = 'other' } = toRefs(props);
  const emit = defineEmits(['filter-province']);
  watch(provinceCode, (val) => {
    if (val && type !== 'other') {
      emit('filter-province', val);
    } else {
      data.value = unref(data).filter((i) => i.province === val);
    }
  });
  // const [registerTable] = useTable({
  //   title: '多级表头示例',
  //   immediate: false,
  //   columns: tableColumnsConfig,
  //   dataSource: props.data,
  // });

  const gridOptions = reactive<BasicTableProps>({
    height: 'auto',
    columns: tableColumnsConfig,
    toolbarConfig: {
      slots: {
        tools: 'tools_button',
      },
    },
    formConfig: {
      enabled: false,
      items: formConfig,
    },
    checkboxConfig: {
      checkField: '_checked',
    },
    proxyConfig: {
      enabled: false,
      autoLoad: false,
    },
  });
  const createActions = (row) => {
    const actions: ActionItem[] = [
      {
        label: t('routes.basic.foodsDetail'),
        onClick: (e) => {
          routerPage(e, '/foods/details', row);
        },
      },
      {
        label: t('routes.basic.foodsScripts'),
        onClick: (e) => {
          routerPage(e, '/foods/scripts', row);
        },
      },
    ];
    return actions;
  };
  const routerPage = (e, url, row) => {
    console.log(router, row, row?.scripts);
    e.stopPropagation();
    console.log('qing', url);
    localStorage.setItem('prevRecordData', JSON.stringify(row?.scripts));
    router.push(url);
  };
  onMounted(() => {
    tableRef.value?.loadData(props.data);
  });
</script>
