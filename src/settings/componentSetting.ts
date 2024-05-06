// Used to configure the general configuration of some components without modifying the components

import type { SorterResult } from '../components/Table';

export default {
  // basic-table setting
  table: {
    // Form interface request general configuration
    // support xxx.xxx.xxx
    fetchSetting: {
      // The field name of the current page passed to the background
      pageField: 'pages',
      // The number field name of each page displayed in the background
      sizeField: 'pageSize',
      // Field name of the form data returned by the interface
      listField: 'list',
      // Total number of tables returned by the interface field name
      totalField: 'total',
    },
    // Number of pages that can be selected
    pageSizeOptions: ['20', '50', '100', '500'],
    // Default display quantity on one page
    defaultPageSize: 20,
    // Default Size
    defaultSize: 'small',
    showTableSetting: false,
    // Custom general sort function
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      if (field && order) {
        return {
          // The sort field passed to the backend you
          field,
          // Sorting method passed to the background asc/desc
          order,
        };
      } else {
        return {};
      }
    },
    // Custom general filter function
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  vxeTable: {
    size: 'large',
    table: {
      border: true,
      stripe: true,
      columnConfig: {
        resizable: true,
        isCurrent: true,
        isHover: true,
      },
      rowConfig: {
        isCurrent: true,
        isHover: true,
      },
      emptyRender: {
        name: 'AEmpty',
      },
      printConfig: {},
      exportConfig: {},
      customConfig: {
        storage: true,
      },
    },
    grid: {
      toolbarConfig: {
        enabled: true,
        export: false,
        zoom: false,
        print: false,
        refresh: false,
        custom: false,
      },
      formConfig: {
        titleColon: true,
      },
      checkboxConfig: {
        checkField: '_checked',
      },
      pagerConfig: {
        background: true,
        layouts: ['PrevPage', 'JumpNumber', 'NextPage', 'Sizes', 'FullJump', 'Total'],
        pageSizes: [20, 50, 100, 500],
        pageSize: 20,
        autoHidden: false,
        align: 'center',
      },
      proxyConfig: {
        form: true,
        props: {
          result: 'list',
          total: 'total',
        },
      },
      zoomConfig: {},
    },
  },
  // scrollbar setting
  scrollbar: {
    // Whether to use native scroll bar
    // After opening, the menu, modal, drawer will change the pop-up scroll bar to native
    native: false,
  },
};
