import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
import {splitterAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('splitter');
const rootContext = getApiDoc('splitter').context;

export default apiEntryFromAnatomy(splitterAnatomy)({
  Panel: {
    dataAttr: dataAttrDoc.Panel,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      id: {
        type: 'PanelId',
      },
      snapSize: {
        type: 'number',
      },
    },
  },
  ResizeTrigger: {
    dataAttr: dataAttrDoc.ResizeTrigger,
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
        type: '{\n\troot?: string;\n\tresizeTrigger(id: string)?: string;\n\tlabel(id: string)?: string;\n\tpanel(id: string | number)?: string;\n}',
        description:
          'The ids of the elements in the splitter. Useful for composition.',
      },

      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
