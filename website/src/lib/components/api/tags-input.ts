import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {tagsInputAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('tags-input');
const rootContext = getApiDoc('tags-input').context;

export default apiEntryFromAnatomy(tagsInputAnatomy)({
  ClearTrigger: {
    dataAttr: dataAttrDoc.ClearTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Input: {
    dataAttr: dataAttrDoc.Input,
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
      },
      index: {
        type: 'string | number',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the item is disabled.',
      },
    },
  },
  ItemDeleteTrigger: {
    dataAttr: dataAttrDoc.ItemDeleteTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemInput: {
    dataAttr: dataAttrDoc.ItemInput,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemPreview: {
    dataAttr: dataAttrDoc.ItemPreview,
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
        type: '{\n\troot?: string;\n\tinput?: string;\n\thiddenInput?: string;\n\tclearTrigger?: string;\n\tlabel?: string;\n\tcontrol?: string;\n\titem(opts: ItemProps)?: string;\n}',
        description:
          'The ids of the elements in the tags input. Useful for composition.',
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
