import XEUtils from 'xe-utils';
import { createDefaultRender, createEditRender, createFormItemCustomRender } from './common';

export default {
  renderDefault: createDefaultRender({}, (_, params) => {
    return {
      params: XEUtils.get(params, 'row'),
    };
  }),
  renderEdit: createEditRender({}, (_, params) => {
    return {
      params: XEUtils.get(params, 'row'),
    };
  }),
  renderItemContent: createFormItemCustomRender(),
};
