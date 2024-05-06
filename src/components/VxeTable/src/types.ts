import { CSSProperties } from 'vue';
import {
  VxeFormDefines,
  VxeFormItemProps,
  VxeGridInstance,
  VxeGridProps,
  VxeTableDefines,
} from 'vxe-table';

export type BasicTableProps = VxeGridProps & {
  tableClass?: string;
  tableStyle?: CSSProperties;
};

// 自定义grid类型，继承VxeGridInstance（原始类型）。附加其他属性（主要是把grid的私有属性强制提出）
export interface CustomVxeGridInstance extends VxeGridInstance {
  triggerToolbarCommitEvent: (params: { code: string }) => void; // grid私有方法
  reload: (isValid?: boolean) => void; // 刷新表格
  validateForm(
    callback?: (errMap?: VxeFormDefines.ValidateErrorMapParams) => void,
  ): Promise<VxeFormDefines.ValidateErrorMapParams>;
}

export interface CustomVxeFormItemProps extends VxeFormItemProps {
  rules?: VxeFormDefines.FormRule[];
}

export interface CustomColumn extends VxeTableDefines.ColumnOptions {
  valids?: VxeTableDefines.ValidatorRule[];
}

export type CustomColumns = CustomColumn[];
