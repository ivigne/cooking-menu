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
  name?: string;
};

// 自定义grid类型，继承VxeGridInstance（原始类型）。附加其他属性（主要是把grid的私有属性强制提出）
export interface CustomVxeGridInstance extends VxeGridInstance {
  triggerToolbarCommitEvent: (params: { code: string }) => void; // grid私有方法
  reload: () => void; // 刷新表格
}

export interface CustomVxeFormItemProps extends VxeFormItemProps {
  rules?: VxeFormDefines.FormRule[];
}

interface CustomColumn extends VxeTableDefines.ColumnOptions {
  valids?: VxeTableDefines.ValidatorRule[];
}

export type CustomColumns = CustomColumn[];
