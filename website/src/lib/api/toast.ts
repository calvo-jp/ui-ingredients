import {getDataAttrDoc} from '@zag-js/docs';
import {toastAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('toast');

export default apiEntryFromAnatomy(toastAnatomy)({
  CloseTrigger: {
    dataAttr: dataAttrDoc.CloseTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ActionTrigger: {
    dataAttr: dataAttrDoc.ActionTrigger,
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
  Group: {
    dataAttr: dataAttrDoc.Group,
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
  Toaster: {
    context: {
      toaster: {
        type: 'CreateToasterReturn',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
