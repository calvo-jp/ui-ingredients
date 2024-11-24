import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {tooltipAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('tooltip');
const rootContext = getApiDoc('tooltip').context;

export default apiEntryFromAnatomy(tooltipAnatomy)({
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
    context: {
      ...omit(rootContext, 'dir', 'getRootNode', 'open.controlled'),

      ids: {
        type: '{\n\ttrigger?: string;\n\tcontent?: string;\n\tarrow?: string;\n\tpositioner?: string;\n}',
        description:
          'The ids of the elements in the tooltip. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description: 'Whether the tooltip is controlled by the user',
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
