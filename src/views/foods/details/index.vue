<template>
  <BasicModal @register="register" :title="title" @ok="onOk">
    <BasicForm @register="registerForm" />
    <CollapseContainer class="consigner-form">
      <Row type="flex" justify="space-between">
        <Col :span="20">
          <!-- <Card :tab-list="tabListTitle" :bordered="false"> </Card> -->
        </Col>
      </Row>
    </CollapseContainer>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { Row, Col, Card, Divider } from 'ant-design-vue';
  import { CollapseContainer } from '/@/components/Container';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { computed, ref } from 'vue';
  import { formSchemas } from './config';

  import { useMessage } from '/@/hooks/web/useMessage';
  import { insertCustomer, updateCustomer, warehouseSelect } from '../api';
  import { useI18n } from '/@/hooks/web/useI18n';
  /**
   * 货主信息-新增/编辑页
   *
   * @author 李青
   * @date 2022.07.08
   */
  const { t } = useI18n();

  const activeTabKey = ref('1');
  const tabListTitle = [
    {
      key: '1',
      tab: t('routes.basicData.specialSettingIn'),
    },
    {
      key: '2',
      tab: t('routes.basicData.specialSettingOut'),
    },
  ];
  const emit = defineEmits(['success', 'register']);

  const { createMessage } = useMessage();

  /**
   * 弹框控制
   */
  const currentData = ref<{ id?: number; consignerRuleVo?: object }>({});

  /**
   * 表单
   */
  const [registerForm, { setFieldsValue, getFieldsValue, resetFields, clearValidate, validate }] =
    useForm({
      layout: 'inline',
      labelWidth: 120,
      schemas: formSchemas(),
      showResetButton: false,
      showSubmitButton: false,
      actionColOptions: { span: 24 },
    });

  /** --------------新增/编辑 表单初始化-------------- */
  async function onReciveData(data) {
    const { row, type } = data;

    if (type !== undefined && type !== null) {
      editType.value = type;
      currentData.value = row;
      resetFields();
      resetFieldsWarehouse();
      resetFieldsIn();
      resetFieldsOut();
      resetSchema(formSchemasConsigner());
      // console.log(data, row,getFieldsValueWarehouse())
      if (row && row.consignerRuleVo) {
        n.value = 1;
        const { transportSetting, warehouseResourceSetting, specialSetting } =
          (row && row.consignerRuleVo) || {};
        const setting = {};
        (await warehouseResourceSetting) &&
          warehouseResourceSetting.settings.map((item, i) => {
            i > 0 && add();
            setting['settings[' + i + '].statusCode'] = item.statusCode;
            setting['settings[' + i + '].warehouseCode'] = item.warehouseCode;
          });
        // console.log('resetFieldsWarehouse',warehouseResourceSetting,setting,{ ...transportSetting, ...setting })
        await setFieldsValue(currentData.value);
        await setFieldsValueWarehouse({ ...transportSetting, ...setting });
        await setFieldsValueIn(specialSetting.in);
        await setFieldsValueOut(specialSetting.out);
        clearValidate();
        clearValidateWarehouse();
        clearValidateIn();
        clearValidateOut();
      }
    } else {
      useMessage().createMessage.error(t('routes.basicData.missPopupBoxType'));
    }
  }
</script>
<style lang="less">
  .consigner-form {
    .ant-col-20 {
      margin: 0 auto;
    }

    .ant-divider-plain.ant-divider-with-text {
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>
