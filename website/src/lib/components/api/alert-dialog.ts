import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {alertDialogAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('dialog');
const rootContext = getApiDoc('dialog').context;

export default apiEntryFromAnatomy(alertDialogAnatomy)({
  Root: {
    context: {
      ...omit(rootContext, 'open.controlled', 'dir', 'role', 'getRootNode'),

      ids: {
        type: '{\n\ttrigger?: string;\n\tpositioner?: string;\n\tbackdrop?: string;\n\tcontent?: string;\n\tcloseTrigger?: string;\n\ttitle?: string;\n\tdescription?: string;\n}',
        description:
          'The ids of the elements in the alert dialog. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description: 'Whether the dialog is controlled by the user.',
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
  Title: {
    dataAttr: dataAttrDoc.Title,
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
