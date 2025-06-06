import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {passwordInputAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('pagination');
const rootContext = getApiDoc('pagination').context;

export default apiEntryFromAnatomy(passwordInputAnatomy)({
  Input: {
    dataAttr: dataAttrDoc.Input,
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
        type: '{\n\troot?: string;\n\tcontrol?: string;\n\tinput?: string;\n\tvisibilityTrigger?: string;\n\tindicator?: string;\n}',
        description:
          'The ids of the elements in the accordion. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
