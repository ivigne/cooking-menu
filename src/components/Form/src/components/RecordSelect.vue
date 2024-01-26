<!--
 * @Author: seatonwang seatonwang@163.com
 * @Date: 2022-11-15 17:37:06
 * @LastEditors: seatonwang seatonwang@163.com
 * @LastEditTime: 2023-03-23 17:34:16
 * @FilePath: /wms-center/src/components/Form/src/components/RecordSelect.vue
 * @Description: Form表单内嵌的行选择组件，返回两个参数： ids: 指定valueField遍历拼接的字符串，list: 本次选中的行
 * 
 * Copyright (c) 2022 by seatonwang seatonwang@163.com, All Rights Reserved. 
-->
<template>
  <FormItemRest>
    <Input v-model:value="state" v-bind="$attrs" size="small" style="cursor: pointer">
      <template #suffix>
        <DashOutlined @click="onOpenRecordModal" />
      </template>
    </Input>
    <RecordSelectModal v-bind="$props" @register="registerModal" @success="onSuccess" />
  </FormItemRest>
</template>
<script lang="ts">
  import { defineAsyncComponent, defineComponent, PropType } from 'vue';
  import { Input, FormProps } from 'ant-design-vue';
  import { FormItemRest } from 'ant-design-vue/es/form';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { DashOutlined } from '@ant-design/icons-vue';
  import { useModal } from '/@/components/Modal';
  import { BasicColumn, BasicTableProps } from '/@/components/Table';
  import { isFunction } from '/@/utils/is';
  import { DynamicProps } from '/#/utils';
  const RecordSelectModal = defineAsyncComponent<any>(
    () => import('../../../RecordSelectModal/src/RecordSelectModal.vue'),
  );

  export default defineComponent({
    name: 'RecordSelect',

    components: {
      Input,
      FormItemRest,
      DashOutlined,
      RecordSelectModal,
    },

    props: {
      value: [String],
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
      beforeClick: {
        // 激活Modal前的校验
        type: Function as PropType<() => Boolean>,
        defalut: null,
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
    },

    emits: ['change', 'check-record', 'update:value'],

    setup(props, { emit }) {
      const attrs = useAttrs();

      // 嵌入到表单中，只需使用钩子绑定来执行表单验证
      const [state] = (attrs as Recordable).value?.vxeItem
        ? useRuleFormItem(props, 'value', 'update:value')
        : useRuleFormItem(props, 'value', 'change');

      const [registerModal, { openModal, closeModal }] = useModal();

      /**
       * @description: 激活行选择Modal
       * @return {*}
       */
      const onOpenRecordModal = () => {
        // 添加前置校验，例如有些场景需要前置操作
        if (isFunction(props.beforeClick)) {
          props.beforeClick() && openModal(true, props);

          return;
        }

        openModal(true, props);
      };

      /**
       * @description: 选择的Modal确认操作，emit数据
       * @param {*} ids 选中的valueField映射属性的拼接字符串
       * @param {*} records 选中列表或对象，radio 返回对象
       * @return {*}
       */
      const onSuccess = (ids: string, records: Array<Record<string, any>> | Object) => {
        state.value = ids; // 渲染至输入框

        emit('check-record', ids, records);
      };

      return {
        state,
        attrs,
        registerModal,
        onOpenRecordModal,
        closeModal,
        onSuccess,
      };
    },
  });
</script>
