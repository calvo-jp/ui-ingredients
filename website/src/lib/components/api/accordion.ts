import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {accordionAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('accordion');
const rootContext = getApiDoc('accordion').context;

export default apiEntryFromAnatomy(accordionAnatomy)({
  Root: {
    dataAttr: dataAttrDoc.Root,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),

      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      ids: {
        type: '{\n\troot?: string;\n\titem(value: string)?: string;\n\titemContent(value: string)?: string;\n\titemTrigger(value: string): string;\n}',
        description:
          'The ids of the elements in the accordion. Useful for composition.',
      },
      lazyMount: {
        type: 'boolean',
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: 'boolean',
        description: 'Whether to keep the content mounted after exit.',
      },
    },
  },
  Item: {
    dataAttr: dataAttrDoc.Item,
    context: {
      value: {
        type: 'string',
        description: 'The value of the item.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the item is disabled.',
      },
    },
  },
  ItemTrigger: {
    dataAttr: dataAttrDoc.ItemTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemContent: {
    dataAttr: dataAttrDoc.ItemContent,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemIndicator: {
    dataAttr: dataAttrDoc.ItemIndicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
