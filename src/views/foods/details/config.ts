/*
 * @Author: vigne 1186963387@qq.com
 * @Date: 2022-08-25 11:46:22
 * @LastEditors: vigne 1186963387@qq.com
 * @LastEditTime: 2022-10-13 19:38:20
 * @FilePath: /cooking-menu/src/views/asia/eastAsia/china/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FormSchema } from '/@/components/Form';

// 美食详情页
export const formSchemas: () => FormSchema[] = () => [
  {
    field: 'consignerCode',
    component: 'Input',
    label: 'introduction：',
    defaultValue: '',
    rules: [
      {
        required: false,
        pattern: /^[0-9a-zA-Z]{1,32}$/,
        message: '',
      },
      { required: true, min: 1, max: 32, message: '' },
    ],
    // componentProps: ({ formActionType }) => {
    //   return {
    //     // 失去焦点时，校验编码是否已存在
    //     onblur: (e) => {
    //       const consignerCode = e?.target.value

    //       consignerCode && isCustomerExist(consignerCode).then((res) => {
    //         if (res) {
    //           const { createMessage } = useMessage()
    //           const { setFieldsValue } = formActionType
    //           setFieldsValue({ consignerCode: '' })
    //           createMessage.error(`${consignerCode} ${}`)
    //         }
    //       })
    //     }
    //   }
    // },
    colProps: {
      span: 22,
    },
  },
  {
    field: 'consignerName',
    component: 'Input',
    label: '：',
    required: true,
    defaultValue: '',
    rules: [{ required: true, min: 1, max: 32, message: '' }],
    colProps: {
      span: 22,
    },
  },
  {
    field: 'consignerShortName',
    component: 'Input',
    label: '：',
    required: true,
    defaultValue: '',
    rules: [{ required: true, min: 1, max: 32, message: '' }],
    colProps: {
      span: 22,
    },
  },
  {
    field: 'contactPerson',
    component: 'Input',
    label: '：',
    defaultValue: '',
    rules: [{ min: 1, max: 32, message: '' }],
    colProps: {
      span: 22,
    },
  },
  {
    field: 'contactPhone',
    component: 'Input',
    label: '：',
    defaultValue: '',
    rules: [{ pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '' }],
    colProps: {
      span: 22,
    },
  },
  {
    field: 'contactAddress',
    component: 'Input',
    label: '：',
    defaultValue: '',
    rules: [{ min: 1, max: 32, message: '' }],
    colProps: {
      span: 22,
    },
  },
]; // 定义新增货主配置表单
