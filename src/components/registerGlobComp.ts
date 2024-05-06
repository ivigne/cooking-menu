import type { App } from 'vue';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,
  Input,
  Select,
  Upload,
  Card,
  Layout,
  DatePicker,
  Form,
  FormItem,
  InputNumber,
  Col,
  Row,
} from 'ant-design-vue';
import VXETable from 'vxe-table';

const compList = [AntButton.Group, DatePicker.RangePicker];

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp);
  });

  app
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(Upload)
    .use(Card)
    .use(Select)
    .use(Form)
    .use(FormItem as any)
    .use(InputNumber)
    .use(Col)
    .use(Row)
    .use(VXETable);
}
