import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {signaturePadAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('signature-pad');
const rootContext = getApiDoc('signature-pad').context;

export default apiEntryFromAnatomy(signaturePadAnatomy)({
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
  Guide: {
    dataAttr: dataAttrDoc.Guide,
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
        type: '{\n\troot?: string;\n\tcontrol?: string;\n\thiddenInput?: string;\n\tlabel?: string;\n}',
        description:
          'The ids of the signature pad elements. Useful for composition.',
      },
      drawing: {
        type: 'DrawingOptions',
        description: 'The drawing options.',
        defaultValue: '{\n\tsize: 2,\n\tsimulatePressure: true,\n}',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Segment: {
    dataAttr: dataAttrDoc.Segment,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  SegmentPath: {
    dataAttr: dataAttrDoc.SegmentPath,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  HiddenInput: {
    dataAttr: dataAttrDoc.HiddenInput,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      value: {
        type: 'string',
      },
    },
  },
});
