<!--
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-12-21 17:22:35
 * @FilePath: /cooking-menu/src/views/components/foodsTable.vue
 * @Description: 美食搜索，列表页
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <PageWrapper v-loading="loadingRef" contentFullHeight fixedHeight loading-tip="请求中...">
    <!-- <BasicTable @register="registerTable" /> -->
    <VxeBasicTable
      ref="tableRef"
      v-bind="gridOptions"
      @checkbox-change="onSelectChange"
      @checkbox-all="onSelectChange"
    >
      <!-- <template #tools_buttons>
        <Button type="primary" @click="editBomRelationship(0, {})">新增</Button>
      </template> -->
      <template #action="{ row }">
        <TableAction outside :actions="createActions(row)" />
        <!-- <Button type="link" @click="editBomRelationship(1, row)">编辑</Button> -->
      </template>
    </VxeBasicTable>
  </PageWrapper>
</template>

<!-- <script lang="ts">
  export default {
    name: 'FoodsTable',
  };
</script> -->
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  // import { BasicTable, useTable } from '/@/components/Table';
  import { ref, unref, toRefs, watch, reactive, onMounted } from 'vue';
  import {
    // formConfig,
    // tableColumnsConfig,
    provinceCode,
    tableColumnsConfigVxe,
    formConfigVxe,
  } from '/@/common/commonConfig';
  import { VxeBasicTable, BasicTableProps, CustomVxeGridInstance } from '/@/components/VxeTable';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { ActionItem, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { router } from '/@/router';
  const tableRef = ref<CustomVxeGridInstance>();
  const checkedKeys = ref<(string | number)[]>([]); // 选中的行keys
  const checkedRows = ref<Record<string, any>[]>([]); // 选中的行
  const loadingRef = ref(false); // 页面Loading

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
  //   formConfig: {
  //     schemas: formConfig,
  //   },
  // });

  const gridOptions = reactive<BasicTableProps>({
    height: 'auto',
    columns: tableColumnsConfigVxe,
    // toolbarConfig: {
    //   slots: {
    //     tools: 'tools_button',
    //   },
    // },
    formConfig: {
      enabled: true,
      items: formConfigVxe,
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
    tableRef.value?.reloadData(props.data);
  });

  /**
   * 表格选中监听
   * @param selectedRowRows 选中的行数据
   */
  const onSelectChange = ({ records }) => {
    checkedRows.value = records;
    checkedKeys.value = records.map((i) => i.id);
  };
</script>
