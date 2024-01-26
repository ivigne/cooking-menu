<!--
 * @Author: seatonwang seatonwang@163.com
 * @Date: 2022-11-16 09:46:53
 * @LastEditors: seatonwang seatonwang@163.com
 * @LastEditTime: 2023-09-26 14:28:37
 * @FilePath: /wms-center/src/components/RecordSelectModal/src/RecordSelectModal.vue
 * @Description: 行选择弹窗组件，支持单选、多选。返回两个参数： ids: 指定valueField遍历拼接字符串，list: 本次选中的行
 * 
 * Copyright (c) 2022 by seatonwang seatonwang@163.com, All Rights Reserved. 
-->
<template>
  <BasicModal
    width="80%"
    :default-fullscreen="true"
    :can-fullscreen="false"
    @register="register"
    :title="title"
    @ok="onOk"
  >
    <BasicTable
      @register="registerTable"
      @row-dbClick="onDBClick"
      :rowSelection="{
        type: checkbox ? 'checkbox' : 'radio',
        selectedRowKeys: checkedKeys,
        onChange: onSelectChange,
        fixed: true,
      }"
    />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, watch, nextTick } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import {
    BasicTable,
    useTable,
    BasicColumn,
    FormProps,
    BasicTableProps,
  } from '/@/components/Table';
  import { DynamicProps } from '/#/utils';
  import { isFunction } from '/@/utils/is';

  const { createMessage } = useMessage();

  const emit = defineEmits(['success', 'register']);

  const props = defineProps({
    api: {
      // 数据源
      type: Function as PropType<(arg?: Recordable) => Promise<any>>,
      default: null,
    },
    params: {
      // 默认参数
      type: Object as PropType<Recordable>,
      default: () => ({}),
    },
    valueField: {
      // 列表中需要回显的唯一值，例如 productId
      type: String,
    },
    title: {
      type: String,
      default: '选择行',
    },
    checkbox: {
      // 单选、多选，默认单选
      type: Boolean,
      default: false,
    },
    columns: {
      // 表格列定义
      type: Array as PropType<BasicColumn[]>,
      default: () => [],
    },
    formConfig: {
      // 搜索区域定义
      type: Object as PropType<Partial<FormProps>>,
      default: () => ({}),
    },
    tableProps: {
      // 表格props
      type: Object as PropType<Partial<DynamicProps<BasicTableProps>>>,
      default: () => ({}),
    },
    reload: {
      // 是否刷新表格，支持动态操作，在每次打开Modal时执行
      type: Function as PropType<(arg?: Recordable) => Boolean>,
      default: () => false,
    },
  });

  // 选中的keys
  const checkedKeys = ref<(string | number)[]>([]);
  const checkedRows = ref<any[]>([]);

  /**
   * @description: 清空选中项
   * @return {*}
   */
  const cleanChecks = (): void => {
    checkedKeys.value = [];
    checkedRows.value = [];
  };

  /**
   * 表格选中监听
   * @param selectedRowRows 选中的行数据
   */
  const onSelectChange = (selectedRowKeys: (string | number)[], selectedRows: any[]) => {
    checkedKeys.value = selectedRowKeys;
    checkedRows.value = selectedRows;
  };

  const [registerTable, { reload, setColumns }] = useTable({
    api: props.api,
    columns: props.columns,
    formConfig: props.formConfig,
    useSearchForm: true,
    bordered: true,
    showTableSetting: false,
    size: 'small',
    canResize: true,
    isCanResizeParent: true,
    showIndexColumn: false,
    immediate: false,
    beforeFetch: (params) => {
      return { ...props.params, ...params };
    },
    afterFetch: () => {
      cleanChecks();
    },
    ...props.tableProps,
  });

  watch(
    () => props.columns,
    () => {
      nextTick(() => {
        setColumns(props.columns);
      });
    },
  );

  const [register, { closeModal }] = useModalInner(() => {
    cleanChecks();
    isFunction(props.reload) && props.reload() && reload();
  });

  /**
   * 提交
   */
  const onOk = async (_e: PointerEvent | null, record: any) => {
    if (!props.valueField) {
      createMessage.warn('缺少 valueField 配置');

      return;
    }

    // 双击行时，直接返回
    if (record) {
      emit('success', record[props.valueField], record);

      closeModal();

      return;
    }

    const ids = checkedRows.value?.map((i) => i?.[props.valueField!]).join(',') || '';
    const records = checkedRows.value;

    emit('success', ids, props.checkbox ? records : records?.[0]);

    closeModal();
  };

  const onDBClick = (record) => {
    // 单选状态，双击直接确认返回
    if (!props.checkbox) {
      onOk(null, record);
    }
  };
</script>
