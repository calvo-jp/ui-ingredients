import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {sliderAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('slider');
const rootContext = getApiDoc('slider').context;

export default apiEntryFromAnatomy(sliderAnatomy)({
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  DraggingIndicator: {
    dataAttr: dataAttrDoc.DraggingIndicator,
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
  Range: {
    dataAttr: dataAttrDoc.Range,
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
        type: '{\n\troot?: string;\n\tthumb(index: number)?: string;\n\thiddenInput(index: number)?: string;\n\tcontrol?: string;\n\ttrack?: string;\n\trange?: string;\n\tlabel?: string;\n\tvalueText?: string;\n\tmarker(index: number)?: string;\n}',
        description:
          'The ids of the elements in the range slider. Useful for composition.',
      },
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
