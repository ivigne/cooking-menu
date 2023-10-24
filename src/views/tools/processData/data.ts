/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2023-10-24 11:38:45
 * @FilePath: /cooking-menu/src/views/tools/processData/data.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import { ref } from 'vue';
import { FormSchema } from '/@/components/Form/index';
export const formSchemas: () => FormSchema[] = () => [
  {
    field: 'divider-api-select',
    component: 'Divider',
    label: '基础信息：',
  },
  {
    field: 'warehousename',
    component: 'Input',
    label: '仓库名称：',
    required: true,
    defaultValue: '',
    rules: [{ required: true, min: 1, max: 32, message: '最大长度限制32个字符' }],
  },
];
