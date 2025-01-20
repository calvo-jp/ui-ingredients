import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {editableAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('editable');
const rootContext = getApiDoc('editable').context;

export default apiEntryFromAnatomy(editableAnatomy)({
  Area: {
    dataAttr: dataAttrDoc.Area,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  CancelTrigger: {
    dataAttr: dataAttrDoc.CancelTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  EditTrigger: {
    dataAttr: dataAttrDoc.EditTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Input: {
    dataAttr: dataAttrDoc.Input,
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
  Preview: {
    dataAttr: dataAttrDoc.Preview,
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
      ...omit(rootContext, 'dir', 'getRootNode', 'edit.controlled'),

      ids: {
        type: '{\n\troot?: string;\n\tarea?: string;\n\tlabel?: string;\n\tpreview?: string;\n\tinput?: string;\n\tcontrol?: string;\n\tsubmitTrigger?: string;\n\tcancelTrigger?: string;\n\teditTrigger?: string;\n}',
        description:
          'The ids of the elements in the editable. Useful for composition.',
      },
      editControlled: {
        type: 'boolean',
        description: 'Whether the editable is controlled',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  SubmitTrigger: {
    dataAttr: dataAttrDoc.SubmitTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
