import { defineComponent, nextTick, onUnmounted } from 'vue';
import { computed, ref } from 'vue';
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
} from 'vxe-table';
import { Grid as VxeGrid } from 'vxe-table';
import Sortable from 'sortablejs';

import { extendSlots } from '/@/utils/helper/tsxHelper';
import { gridComponentMethodKeys } from './methods';
import { omit } from 'lodash-es';
import { useMessage } from '/@/hooks/web/useMessage';
import {
  TableColumn,
  postSaveTableColumnConfigApi,
  getTableColumnConfigApi,
} from '/@/components/api';

export default defineComponent({
  name: 'VxeBasicTable',
  props: basicProps,
  emits: basicEmits,
  setup(props, { emit, attrs }) {
    const tableElRef = ref<CustomVxeGridInstance>();
    const emitEvents: VxeGridEventProps = {};
    const { createMessage } = useMessage();
    const originColumnConfig = ref<TableColumn[]>([]); // 表格列配置

    let sortTableObj; // 排序表格
    let initTime; // 延迟

    if (props.id) {
      getTableColumnConfigApi({ tableKey: props.id }).then((res) => {
        originColumnConfig.value = res;
      });

      nextTick(() => {
        initTime = setTimeout(() => {
          bindTableColumnDrop();
        }, 500);
      });
    }

    onUnmounted(() => {
      if (initTime) clearTimeout(initTime);

      if (sortTableObj) sortTableObj.destroy();
    });

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
        propsData.columns = propsData.columns.map((column) => {
          // 类型列、slots列，由业务自定义控制
          if (column.type || column.slots) {
            return column;
          }

          let titleWidth = (column.title?.length || 0) * 20 + 15;

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
            if (column.width < titleWidth) {
              columnOpts.width = undefined;
              columnOpts.minWidth = titleWidth;
            } else {
              columnOpts.minWidth = columnOpts.width;
              columnOpts.width = undefined;
            }
          }

          return columnOpts;
        });
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

      // 合并远端列配置
      if (props.id && originColumnConfig.value?.length) {
        const mergeColumnConfig = propsData.columns
          ?.map((column, index) => {
            const exist = originColumnConfig.value.find((x) => x.columnCode === column.field);

            // 如果服务端没有配置，标记为本地新增
            if (!exist) {
              return { ...column, _index: index };
            }

            return { ...column, _index: exist.columnIndex, visible: exist.columnHidden === 0 };
          })
          .sort((a, b) => (a?._index || 0) - (b?._index || 0));

        propsData.columns = mergeColumnConfig as CustomColumns;
      }

      propsData.columnConfig = { useKey: true, ...propsData.columnConfig };

      return propsData;
    });

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

    const handleCustom = (grid) => {
      if (grid.type !== 'confirm') return;

      const tableKey = getBindValues.value.id;
      const tableName = getBindValues.value.name;

      if (!tableKey || !tableName) {
        createMessage.warn('缺少表格key配置，请反馈管理员');

        return;
      }

      const payload = grid.$grid
        .getTableColumn()
        .fullColumn.map((column, index) => {
          // 指定的特殊类型
          if (column.type || column.slots?.default === 'action') {
            return null;
          }

          return {
            tableKey,
            tableName,
            columnCode: column.field,
            columnName: column.title,
            columnWidth: column.width,
            columnIndex: index,
            columnHidden: Number(!column.visible),
          };
        })
        .filter(Boolean);

      postSaveTableColumnConfigApi(payload).then(() => {
        createMessage.success('保存成功');
      });
    };

    /**
     * @description: 给表格列绑定拖拽
     * @return {*}
     */
    const bindTableColumnDrop = () => {
      const $grid = tableElRef.value;
      const id = props.id;

      if ($grid && id) {
        sortTableObj = Sortable.create(
          $grid.$el.querySelector(`#${id} .body--wrapper>.vxe-table--header .vxe-header--row`),
          {
            handle: '.vxe-header--column',
            onEnd: (sortableEvent) => {
              const targetThElem = sortableEvent.item;
              const newIndex = sortableEvent.newIndex as number;
              const oldIndex = sortableEvent.oldIndex as number;
              const { fullColumn, tableColumn } = $grid.getTableColumn();
              const wrapperElem = targetThElem.parentNode as HTMLElement;
              const newColumn = fullColumn[newIndex];
              if (newColumn.fixed) {
                // 错误的移动
                const oldThElem = wrapperElem.children[oldIndex] as HTMLElement;
                if (newIndex > oldIndex) {
                  wrapperElem.insertBefore(targetThElem, oldThElem);
                } else {
                  wrapperElem.insertBefore(
                    targetThElem,
                    oldThElem ? oldThElem.nextElementSibling : oldThElem,
                  );
                }
                createMessage.warn('固定列不允许拖动！');
                return;
              }
              // 获取列索引 columnIndex > fullColumn
              const oldColumnIndex = $grid.getColumnIndex(tableColumn[oldIndex]);
              const newColumnIndex = $grid.getColumnIndex(tableColumn[newIndex]);
              // 移动到目标列
              const currRow = fullColumn.splice(oldColumnIndex, 1)[0];
              fullColumn.splice(newColumnIndex, 0, currRow);
              $grid.loadColumn(fullColumn);
            },
          },
        );
      }
    };

    return {
      getWrapperClass,
      getBindGridValues,
      tableElRef,
      handleCustom,
      ...gridExtendTableMethods,
      // 自定义方法
      reload: () => tableElRef.value?.triggerToolbarCommitEvent({ code: 'reload' }),
    };
  },
  render() {
    const { tableClass, tableStyle, id } = this.$props;

    return (
      <div id={id} class={`h-full flex flex-col bg-white ${this.getWrapperClass}`}>
        <VxeGrid
          ref="tableElRef"
          class={`vxe-grid_scrollbar px-6 py-4 ${tableClass}`}
          style={tableStyle}
          onCustom={this.handleCustom}
          {...this.getBindGridValues}
        >
          {extendSlots(this.$slots)}
        </VxeGrid>
      </div>
    );
  },
});
