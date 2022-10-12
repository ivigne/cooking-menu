<template>
  <div>
    <BasicTable @register="registerTable" @row-db-click="onViewDetail">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-button type="link" @click="(e) => onUpdateStatus(e, record)">{{
            record.statusCode == 1 ? t('common.disableText') : t('common.enableText')
          }}</a-button>
          <a-button type="link" @click="(e) => onUpdateRecord(e, record)">{{
            t('common.editText')
          }}</a-button>
        </template>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="(e) => onAdd(e)">{{ t('common.addText') }}</a-button>
      </template>
    </BasicTable>
    <!-- 省市区/县 菜名 配料  方法 技术总结 -->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'CargoOwners',
  };
</script>
<script lang="ts" setup>
  // import { reactive } from 'vue'
  // import { downloadTemplate, getCustomerList, updateStatus, uploadCustomers } from './api'
  import { formConfig, tableColumnsConfig } from './config';
  import { chinaTableData } from './data';
  // import { formConfig, tableColumnsConfig } from './data';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  // import { Upload } from 'ant-design-vue'
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();
  console.log('tableData', tableData);
  const { createConfirm, createMessage } = useMessage();

  const [registerTable, { reload }] = useTable({
    dataSource: chinaTableData['siChuan'],
    columns: tableColumnsConfig,
    formConfig: formConfig,
    isTreeTable: true,
    useSearchForm: true,
    bordered: true,
    showTableSetting: true,
    size: 'small',
    tableSetting: { fullScreen: false },
    showIndexColumn: false,
    pagination: { pageSize: 10 },
    actionColumn: {
      title: t('common.operationText'),
      width: 180,
      dataIndex: 'action',
    },
  });

  /**
   * 编辑货主状态
   * @param e
   * @param record
   */
  const onUpdateStatus = (e, record) => {
    e.stopPropagation();

    const { id, statusCode } = record;
    const preStatus = ~~statusCode === 1 ? 0 : 1;
    createConfirm({
      iconType: 'warning',
      title: t('common.tipsText'),
      content: `${t('common.okText')}${
        ~~preStatus === 0 ? t('common.disableText') : t('common.enableText')
      } ${t('routes.basicData.customerText')}`,
      onOk: async () => {
        updateStatus(id).then(() => {
          reload();
          createMessage.success(t('routes.basicData.successfulStatusText'));
        });
      },
    });
  };

  /**
   * 新增编辑
   */

  const [registerOwnerEdit, { openModal: openOwnerEditorModal }] = useModal();
  //编辑
  const onUpdateRecord = (e, record) => {
    e.stopPropagation();
    openOwnerEditorModal(true, { row: record, type: 1 });
  };
  // 查看详情
  const onViewDetail = (row) => {
    openOwnerEditorModal(true, { row, type: 2 });
  };
  //新增
  const onAdd = (e) => {
    e.stopPropagation();
    openOwnerEditorModal(true, { row: {}, type: 0 });
  };

  /**
   * 下载导入
   */
  // 导入文件
  // const fileList = reactive([])
  // const onDownloadTemplate = (e) => {
  //   e.stopPropagation()
  //   downloadTemplate()
  // }
  // const onBeforeUpload = (file) => {
  //   uploadCustomers({ name: 'multipartFile', file })
  //     .then((res) => {
  //       if (res) {
  //         createMessage.success(t('common.importText') + t('common.successText'))
  //         reload()

  //         return
  //       }
  //       createMessage.error(t('common.importText') + t('common.failText'))
  //     })
  //     .catch((err) => {
  //       createMessage.error(
  //         err?.message || t('common.importText') + t('common.templateText') + t('common.failText')
  //       )
  //     })

  //   return false
  // }
</script>
