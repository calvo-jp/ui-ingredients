import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {paginationAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('pagination');
const rootContext = getApiDoc('pagination').context;

export default apiEntryFromAnatomy(paginationAnatomy)({
  Ellipsis: {
    dataAttr: dataAttrDoc.Ellipsis,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      index: {
        type: 'number',
        description: 'The index of the ellipsis.',
      },
    },
  },
  Item: {
    dataAttr: dataAttrDoc.Item,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      index: {
        type: 'number',
        description: 'The index of the item.',
      },
    },
  },
  NextTrigger: {
    dataAttr: dataAttrDoc.NextTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  PrevTrigger: {
    dataAttr: dataAttrDoc.PrevTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Root: {
    dataAttr: dataAttrDoc.Root,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),
      ids: {
        type: '{\n\troot?: string;\n\tellipsis(index: number)?: string;\n\tprevTrigger?: string;\n\tnextTrigger?: string;\n\titem(page: number)?: string;\n}',
        description:
          'The ids of the elements in the accordion. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
