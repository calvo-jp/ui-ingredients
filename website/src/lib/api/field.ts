import {fieldAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

export default apiEntryFromAnatomy(fieldAnatomy)({
  ErrorText: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'error-text',
    },
  },
  HelperText: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'helper-text',
    },
  },
  Input: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'input',
    },
  },
  Label: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'label',
    },
  },
  RequiredIndicator: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'required-indicator',
    },
  },
  Root: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'root',
    },
  },
  Select: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'select',
    },
  },
  Textarea: {
    context: {
      autoResize: {
        type: 'boolean',
        description:
          'Automatically resize the textarea based on the content length.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'textarea',
    },
  },
});
