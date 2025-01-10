import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {segmentGroupAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('radio-group');
const rootContext = getApiDoc('radio-group').context;

export default apiEntryFromAnatomy(segmentGroupAnatomy)({
  Indicator: {
    dataAttr: dataAttrDoc.Indicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
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
      value: {
        type: 'string',
        description: 'The value of the item.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the item is disabled.',
      },
      invalid: {
        type: 'boolean',
        description: 'Whether the item is invalid.',
      },
    },
  },
  ItemControl: {
    dataAttr: dataAttrDoc.ItemControl,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemText: {
    dataAttr: dataAttrDoc.ItemText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Label: {
    dataAttr: dataAttrDoc.Label,
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
        type: '{\n\troot?: string;\n\tlabel?: string;\n\tindicator?: string;\n\titem(value: string)?: string;\n\titemLabel(value: string)?: string;\n\titemControl(value: string)?: string;\n\titemHiddenInput(value: string)?: string;\n}',
        description:
          'The ids of the elements in the radio. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  HiddenInput: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
