import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {toggleGroupAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('toggle-group');
const rootContext = getApiDoc('toggle-group').context;

export default apiEntryFromAnatomy(toggleGroupAnatomy)({
  Item: {
    dataAttr: dataAttrDoc.Item,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Root: {
    dataAttr: dataAttrDoc.Item,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),

      ids: {
        type: '{\n\troot?: string;\n\titem(value: string)?: string;\n}',
        description:
          'The ids of the elements in the toggle. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
