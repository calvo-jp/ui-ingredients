import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {angleSliderAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('angle-slider');
const rootContext = getApiDoc('angle-slider').context;

export default apiEntryFromAnatomy(angleSliderAnatomy)({
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
        description: 'Whether to keep the component mounted after exit.',
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
  Label: {
    dataAttr: dataAttrDoc.Label,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Marker: {
    dataAttr: dataAttrDoc.Marker,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      value: {
        type: 'number',
        description: 'The value of the marker.',
      },
    },
  },
  MarkerGroup: {
    dataAttr: dataAttrDoc.MarkerGroup,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Thumb: {
    dataAttr: dataAttrDoc.Thumb,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Track: {
    dataAttr: dataAttrDoc.Track,
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
  HiddenInput: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
