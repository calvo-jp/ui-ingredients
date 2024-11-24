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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
    },
  },
  Root: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      id: {
        type: 'string',
        description: 'The unique identifier of the machine.',
      },
      ids: {
        type: '{\n\troot: string;\n\tlabel: string;\n\tcontrol: string;\n\terrorText: string;\n\thelperText: string;\n}',
        description: 'The ids of the field parts.',
      },
      invalid: {
        type: 'boolean',
        description: 'Whether the field is invalid.',
      },
      required: {
        type: 'boolean',
        description: 'Whether the field is required.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the field is disabled.',
      },
      readOnly: {
        type: 'boolean',
        description: 'Whether the field is read-only.',
      },
    },
    dataAttr: {
      'data-scope': 'field',
      'data-part': 'root',
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
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
      'data-invalid': 'Present when the field is invalid.',
      'data-disabled': 'Present when the field is disabled.',
      'data-required': 'Present when the field is required.',
      'data-readonly': 'Present when the field is readonly.',
    },
  },
});
