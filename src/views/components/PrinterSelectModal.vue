<template>
  <BasicModal @register="registerModal" @ok="onOk" title="打印">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  const formSchemas: FormSchema[] = [
    {
      field: 'printer',
      label: '打印机',
      component: 'Select',
      required: true,
      componentProps: {
        options: [],
        labelInValue: true,
      },
      colProps: {
        span: 20,
      },
    },
  ];
  const emits = defineEmits(['register', 'print']);

  const accountType = ref<any>();
  const selectData = ref<any>([]);
  const [registerModal, { closeModal }] = useModalInner((data) => {
    const { accountType: at, selectData: sd, printListObj: po } = data;
    accountType.value = at;
    selectData.value = sd;
    setFieldsValue({ printer: undefined });
    formSchemas[0].componentProps!['options'] = po[accountType.value];
    resetSchema(formSchemas);
    nextTick(() => {
      clearValidate();
    });
  });

  const [registerForm, { resetSchema, setFieldsValue, getFieldsValue, validate, clearValidate }] =
    useForm({
      labelWidth: 120,
      showActionButtonGroup: false,
      schemas: formSchemas,
    });

  const onOk = () => {
    validate().then(() => {
      emits('print', {
        selectData: selectData.value,
        accountType: accountType.value,
        ...getFieldsValue(),
      });
      closeModal();
    });
  };
</script>
