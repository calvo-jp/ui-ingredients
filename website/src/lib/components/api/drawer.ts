import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {drawerAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('dialog');
const rootContext = getApiDoc('dialog').context;

export default apiEntryFromAnatomy(drawerAnatomy)({
  Root: {
    context: {
      ...omit(rootContext, 'open.controlled', 'dir', 'role', 'getRootNode'),

      ids: {
        type: '{\n\ttrigger?: string;\n\tpositioner?: string;\n\tbackdrop?: string;\n\tcontent?: string;\n\tcloseTrigger?: string;\n\ttitle?: string;\n\tdescription?: string;\n}',
        description:
          'The ids of the elements in the drawer. Useful for composition.',
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
  Body: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'drawer',
      'data-part': 'body',
      'data-state': '"open" | "closed"',
    },
  },
  Footer: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'drawer',
      'data-part': 'footer',
      'data-state': '"open" | "closed"',
    },
  },
  Header: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'drawer',
      'data-part': 'header',
      'data-state': '"open" | "closed"',
    },
  },
});
