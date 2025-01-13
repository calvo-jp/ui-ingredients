import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {tourAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('tour');
const rootContext = getApiDoc('tour').context;

export default apiEntryFromAnatomy(tourAnatomy)({
  ActionTrigger: {
    dataAttr: dataAttrDoc.ActionTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      action: {
        type: 'StepAction',
      },
    },
  },
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
  Backdrop: {
    dataAttr: dataAttrDoc.Backdrop,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  CloseTrigger: {
    dataAttr: dataAttrDoc.CloseTrigger,
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
  Description: {
    dataAttr: dataAttrDoc.Description,
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
  ProgressText: {
    dataAttr: dataAttrDoc.ProgressText,
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
        type: '{\n\tcontent?: string;\n\ttitle?: string;\n\tdescription?: string;\n\tpositioner?: string;\n\tbackdrop?: string;\n\tarrow: string;\n}',
        description:
          'The ids of the elements in the tour. Useful for composition.',
      },
      spotlightOffset: {
        type: 'Point',
        description: 'The offsets to apply to the spotlight',
        defaultValue: '{\n\tx: 10,\n\ty: 10,\n}',
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
  Spotlight: {
    dataAttr: dataAttrDoc.Spotlight,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Title: {
    dataAttr: dataAttrDoc.Title,
    context: {
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
