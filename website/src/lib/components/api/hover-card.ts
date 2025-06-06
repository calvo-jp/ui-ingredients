import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {hoverCardAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('hover-card');
const rootContext = getApiDoc('hover-card').context;

export default apiEntryFromAnatomy(hoverCardAnatomy)({
  Arrow: {
    dataAttr: dataAttrDoc.Arrow,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ArrowTip: {
    dataAttr: dataAttrDoc.ArrowTip,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Content: {
    dataAttr: dataAttrDoc.Content,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Positioner: {
    dataAttr: dataAttrDoc.Positioner,
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
        type: '{\n\ttrigger?: string;\n\tcontent?: string;\n\tpositioner?: string;\n\tarrow?: string;\n}',
        description:
          'The ids of the elements in the popover. Useful for composition.',
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
