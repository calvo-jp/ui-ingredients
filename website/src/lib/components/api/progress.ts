import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {progressAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('progress');
const rootContext = getApiDoc('progress').context;

export default apiEntryFromAnatomy(progressAnatomy)({
  Circle: {
    dataAttr: dataAttrDoc.Circle,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  CircleRange: {
    dataAttr: dataAttrDoc.CircleRange,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  CircleTrack: {
    dataAttr: dataAttrDoc.CircleTrack,
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
        type: '{\n\troot?: string;\n\ttrack?: string;\n\tlabel?: string;\n\tcircle?: string;\n}',
        description:
          'The ids of the elements in the progress bar. Useful for composition.',
      },
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
    dataAttr: dataAttrDoc.ValueTex,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  View: {
    dataAttr: dataAttrDoc.View,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      state: {
        type: 'ProgressState',
      },
    },
  },
});
