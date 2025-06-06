import {getApiDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {passwordInputAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const rootContext = getApiDoc('password-input').context;

export default apiEntryFromAnatomy(passwordInputAnatomy)({
  Input: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"input"',
      'data-state': '"open" | "closed"',
    },
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Control: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"control"',
    },
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Indicator: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"indicator"',
      'data-state': '"open" | "closed"',
    },
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Label: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"label"',
    },
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  VisibilityTrigger: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"visibility-trigger"',
      'data-state': '"open" | "closed"',
    },
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Root: {
    dataAttr: {
      'data-scope': '"password-input"',
      'data-part': '"root"',
    },
    context: {
      ...omit(rootContext, 'dir', 'getRootNode'),
      ids: {
        type: '{\n\troot?: string;\n\tcontrol?: string;\n\tinput?: string;\n\tvisibilityTrigger?: string;\n\tindicator?: string;\n}',
        description:
          'The ids of the elements in the password input. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
