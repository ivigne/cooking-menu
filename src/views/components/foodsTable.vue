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
    <VxeBasicTable
      ref="tableRef"
      v-bind="gridOptions"
      @checkbox-change="onSelectChange"
      @checkbox-all="onSelectChange"
    >
      <!-- @form-submit="handleResult" -->
      <template #tools_buttons>
        <Button type="primary" @click="queryToop100()">百强城市路线查询</Button>
        <Tooltip content="华东-南方路线-第一次打卡的城市集合">
          <Button type="primary" @click="top100FirstGotoLine()">百强城市路线查询</Button>
        </Tooltip>
        <!-- <Button type="primary" @click="editBomRelationship(0, {})">新增</Button> -->
      </template>
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
  import { ref, toRefs, reactive, onMounted } from 'vue';
  import {
    // formConfig,
    // tableColumnsConfig,
    tableColumnsConfigVxe,
    formConfigVxe,
    objectFlag,
  } from '/@/common/commonConfig';
  import { VxeBasicTable, BasicTableProps, CustomVxeGridInstance } from '/@/components/VxeTable';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { ActionItem, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { router } from '/@/router';
  import { chinaAreaEastProvinceSouthLineFirst } from '/@/common/chinaEveryAreaData';
  const tableRef = ref<CustomVxeGridInstance>();
  const checkedKeys = ref<(string | number)[]>([]); // 选中的行keys
  const checkedRows = ref<Record<string, any>[]>([]); // 选中的行
  const loadingRef = ref(false); // 页面Loading

  const { t } = useI18n();
  const { createMessage } = useMessage();
  const props = defineProps({
    data: {
      type: [Array, Object],
      default: () => [],
    },
    objData: {
      type: Object as PropType<Recordable>,
      default: () => ({}),
    },
    type: { type: String, default: 'other' },
  });
  const { data, objData, type } = toRefs(props);
  console.log('props', data.value, objData.value);
  objectFlag.value = type.value != 'other' ? true : false;
  // const emit = defineEmits(['filter-province']);
  // watch(province, (val) => {
  //   if (val && type !== 'other') {
  //     emit('filter-province', val);
  //   } else {
  //     data.value = unref(data).filter((i) => i.province === val);
  //   }
  // });
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
      titleWidth: 120,
      titleAlign: 'right',
      items: formConfigVxe,
    },
    checkboxConfig: {
      checkField: '_checked',
    },
    pagerConfig: {
      pageSize: 500,
      // enabled: false,
    },
    proxyConfig: {
      // enabled: false,
      // autoLoad: false,
      ajax: {
        query: async ({ form }) => {
          console.log(' form', form);
          const params = { ...form };
          const result = await handleResult(params);
          return result;
        },
      },
    },
  });
  const handleResult = (params) => {
    const {
      province,
      foodName,
      foodCategoryCode,
      cookingTypeCode,
      cuisineCategoryCode,
      tasteCode,
      isCookFlag,
    } = params;
    const result = ref<Recordable[]>([]);
    // 根据省过滤数据

    if (type.value != 'other') {
      if (!province) return createMessage.warning('请选择省市区');
      result.value = objData.value[province?.value];
    } else {
      result.value = !province
        ? data.value
        : data.value.filter((item) => province?.label.includes(item.province));
    }
    // 根据食物名称过滤数据
    if (foodName && foodName.length > 0) {
      result.value = result.value?.filter((item) => item?.foodName.includes(foodName));
    }
    // 根据“是否已烹饪”过滤数据
    if (isCookFlag && isCookFlag.length > 0) {
      result.value = result.value?.filter((item) => item?.isCookFlag === isCookFlag);
    }
    // 根据“食材类别”过滤数据
    if (foodCategoryCode && foodCategoryCode.length > 0) {
      result.value = result.value?.filter((item) =>
        item?.foodCategoryCode.includes(foodCategoryCode),
      );
    }
    // 根据“烹饪方式”过滤数据
    if (cookingTypeCode && cookingTypeCode.length > 0) {
      result.value = result.value?.filter((item) =>
        item?.cookingTypeCode.includes(cookingTypeCode),
      );
    }
    // 根据“菜系”过滤数据
    if (cuisineCategoryCode && cuisineCategoryCode.length > 0) {
      result.value = result.value?.filter((item) =>
        item?.cuisineCategoryCode.includes(cuisineCategoryCode),
      );
    }
    // 根据“口味类型”过滤数据
    if (tasteCode && tasteCode.length > 0) {
      result.value = result.value?.filter((item) => item?.tasteCode.includes(tasteCode));
    }
    console.log('handleResult', province, foodName, result.value, typeof result.value);
    const res = {
      list: result.value?.length > 0 ? result.value : null,
      total: result.value?.length | 0,
    };

    return res;
  };
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
  const queryToop100 = () => {
    const { province, city, district } = tableRef.value?.getProxyInfo()?.form || {};

    console.log('formData', province, city, district);
  };
  const top100FirstGotoLine = () => {
    console.log('top100FirstGotoLine', chinaAreaEastProvinceSouthLineFirst);
  };
  const routerPage = (e, url, row) => {
    console.log(router, row, row?.scripts);
    e.stopPropagation();
    console.log('qing', url);
    localStorage.setItem('prevRecordData', JSON.stringify(row?.scripts));
    router.push(url);
  };
  onMounted(() => {
    // tableRef.value?.reloadData(objData.value['siChuan']);
    // console.log('onMounted', objData.value['siChuan']);
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
