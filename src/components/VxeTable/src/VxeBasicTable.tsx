import { defineComponent, computed, ref } from 'vue';
import {
  BasicTableProps,
  CustomColumns,
  CustomVxeFormItemProps,
  CustomVxeGridInstance,
} from './types';
import { basicProps } from './props';
import { ignorePropKeys } from './const';
import { basicEmits } from './emits';
import XEUtils from 'xe-utils';
import type {
  VxeGridEventProps,
  GridMethods,
  TableMethods,
  TableEditMethods,
  TableValidatorMethods,
  VxeFormPropTypes,
  VxeTablePropTypes,
  VxeTableDefines,
} from 'vxe-table';
import { Grid as VxeGrid } from 'vxe-table';

import { extendSlots } from '/@/utils/helper/tsxHelper';
import { gridComponentMethodKeys } from './methods';
import { omit } from 'lodash-es';

export default defineComponent({
  name: 'VxeBasicTable',
  props: basicProps,
  emits: basicEmits,
  setup(props, { emit, attrs }) {
    const tableElRef = ref<CustomVxeGridInstance>();
    const emitEvents: VxeGridEventProps = {};

    const extendTableMethods = (methodKeys) => {
      const funcs: any = {};
      methodKeys.forEach((name) => {
        funcs[name] = (...args: any[]) => {
          const $vxegrid: any = tableElRef.value;
          if ($vxegrid && $vxegrid[name]) {
            return $vxegrid[name](...args);
          }
        };
      });

      return funcs;
    };

    const gridExtendTableMethods = extendTableMethods(gridComponentMethodKeys) as GridMethods &
      TableMethods &
      TableEditMethods &
      TableValidatorMethods;

    basicEmits.forEach((name) => {
      const type = XEUtils.camelCase(`on-${name}`) as keyof VxeGridEventProps;

      emitEvents[type] = (...args: any[]) => emit(name, ...args);
    });

    /**
     * @description: 二次封装需要的所有属性
     *  1.部分属性需要和全局属性进行合并
     */
    const getBindValues = computed<BasicTableProps>(() => {
      const propsData: BasicTableProps = {
        ...attrs,
        ...props,
      };
      // 对grid的options统一处理
      // 格式化列，添加默认属性
      if (propsData.columns && propsData.columns.length) {
        propsData.columns = calculateColumnsWidth(propsData.columns);
      }

      // 提升formConfig下items中的rules
      if (propsData.formConfig && Object.keys(propsData.formConfig).length) {
        const rules: VxeFormPropTypes.Rules = {};

        (propsData.formConfig?.items as CustomVxeFormItemProps[])?.forEach((item) => {
          if (item.rules && item.rules.length) {
            rules[item.field as string] = item.rules;
          }
        });

        propsData.formConfig.rules = rules;
      }

      // 提升可编辑单元格的校验方法
      if (propsData.columns && propsData.columns.length) {
        const validRules: VxeTablePropTypes.EditRules = {};

        (propsData.columns as CustomColumns)?.forEach((item) => {
          if (item.valids && item.valids.length) {
            validRules[item.field as string] = item.valids;
          }
        });

        propsData.editRules = validRules;
      }
      return propsData;
    });

    /**
     * @description: 计算列宽
     * @param {*} _columns
     * @return {*}
     */
    const calculateColumnsWidth = (_columns) => {
      const columns = _columns.map((column) => {
        // 类型列、slots列，由业务自定义控制
        if (column.type || column.slots) {
          return column;
        }

        let titleWidth = (column.title?.length || 0) * 20 + 30;

        if (column.editRender) {
          titleWidth += 20;
        }

        titleWidth = Math.max(titleWidth, 100);

        const columnOpts = {
          showFooterOverflow: column.showFooterOverflow || 'title',
          showOverflow: column.showOverflow || 'title',
          sortable: true,

          ...column,
        };

        // 无自定义列宽，设置minWidth，撑满
        if (!column.width) {
          columnOpts.minWidth = titleWidth;
        } else {
          // 有自定义列宽，但太窄，设置minWidth，撑满
          if ((column.width as number) < titleWidth) {
            columnOpts.width = undefined;
            columnOpts.minWidth = titleWidth;
          } else {
            columnOpts.minWidth = columnOpts.width;
            columnOpts.width = undefined;
          }
        }

        return columnOpts;
      });
      return columns;
    };

    /**
     * @description: Table 所有属性
     */
    const getBindGridValues = computed(() => {
      const omitProps = omit(getBindValues.value, ignorePropKeys);

      return {
        ...omitProps,
        ...getBindGridEvent,
      };
    });

    /**
     * @description: 组件外层class
     */
    const getWrapperClass = computed(() => {
      return [attrs.class];
    });

    /**
     * @description: 重写Vxe-table 方法
     */
    const getBindGridEvent: VxeGridEventProps = {
      ...emitEvents,
    };

    return {
      getWrapperClass,
      getBindGridValues,
      tableElRef,
      ...gridExtendTableMethods,
      // 自定义方法
      reload: (isValid = true) => {
        // 如果开启校验Form，收集rules
        if (isValid) {
          const { refForm } = tableElRef.value?.getRefMaps() || {};

          // 未收集到rules，则直接reload
          if (!refForm || !refForm.value) {
            tableElRef.value?.triggerToolbarCommitEvent({ code: 'reload' });

            return;
          }

          refForm.value?.validate().then((valid) => {
            if (!valid) {
              tableElRef.value?.triggerToolbarCommitEvent({ code: 'reload' });
            }
          });
        } else {
          tableElRef.value?.triggerToolbarCommitEvent({ code: 'reload' });
        }
      },
      validateForm: () => {
        const { refForm } = tableElRef.value?.getRefMaps() || {};
        return refForm?.value?.validate();
      },
      // 自定义方法
      reloadColumn: (
        _columns: (VxeTableDefines.ColumnOptions<any> | VxeTableDefines.ColumnInfo<any>)[],
      ) => {
        let columns: any[] = [];
        if (_columns && _columns.length) {
          columns = calculateColumnsWidth(_columns);
        }
        return tableElRef.value?.reloadColumn(columns);
      },
    };
  },
  render() {
    const { tableClass, tableStyle } = this.$props;

    return (
      <div
        class={`flex flex-col bg-white ${this.getWrapperClass}`}
        style={{ height: 'calc(100% - 1px)' }}
      >
        <VxeGrid
          ref="tableElRef"
          class={`vxe-grid_scrollbar px-2 py-2 ${tableClass}`}
          style={tableStyle}
          {...this.getBindGridValues}
        >
          {extendSlots(this.$slots)}
        </VxeGrid>
      </div>
    );
  },
});
