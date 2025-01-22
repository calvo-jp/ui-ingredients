import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {numberInputAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('number-input');
const rootContext = getApiDoc('number-input').context;

export default apiEntryFromAnatomy(numberInputAnatomy)({
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  DecrementTrigger: {
    dataAttr: dataAttrDoc.DecrementTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  IncrementTrigger: {
    dataAttr: dataAttrDoc.IncrementTrigger,
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
        type: '{\n\troot?: string;\n\tlabel?: string;\n\tinput?: string;\n\tincrementTrigger?: string;\n\tdecrementTrigger?: string;\n\tscrubber?: string;\n}',
        description:
          'The ids of the elements in the number input. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Scrubber: {
    dataAttr: dataAttrDoc.Scrubber,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ValueText: {
    dataAttr: dataAttrDoc.ValueText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
