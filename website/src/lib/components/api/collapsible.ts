import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {collapsibleAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('collapsible');
const rootContext = getApiDoc('collapsible').context;

export default apiEntryFromAnatomy(collapsibleAnatomy)({
  Content: {
    dataAttr: dataAttrDoc.Content,
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
      ...omit(rootContext, 'dir', 'getRootNode', 'open.controlled'),

      ids: {
        type: '{\n\troot?: string;\n\tcontent?: string;\n\ttrigger?: string;\n}',
        description:
          'The ids of the elements in the collapsible. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description:
          'Whether the collapsible open state is controlled by the user',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Trigger: {
    dataAttr: dataAttrDoc.Trigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
