import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {carouselAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('carousel');
const rootContext = getApiDoc('carousel').context;

export default apiEntryFromAnatomy(carouselAnatomy)({
  Indicator: {
    dataAttr: dataAttrDoc.Indicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      index: {
        type: 'number',
        description: 'The index of the indicator.',
      },
      readOnly: {
        type: 'boolean',
      },
    },
  },
  IndicatorGroup: {
    dataAttr: dataAttrDoc.IndicatorGroup,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Item: {
    dataAttr: dataAttrDoc.Item,
    context: {
      index: {
        type: 'number',
        description: 'The index of the item.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemGroup: {
    dataAttr: dataAttrDoc.ItemGroup,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  NextTrigger: {
    dataAttr: dataAttrDoc.NextTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  PrevTrigger: {
    dataAttr: dataAttrDoc.PrevTrigger,
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
        type: '{\n\troot?: string;\n\tviewport?: string;\n\titem(index: number)?: string;\n\titemGroup?: string;\n\tnextTrigger?: string;\n\tprevTrigger?: string;\n\tindicatorGroup?: string;\n\tindicator(index: number?): string;\n}',
        description:
          'The ids of the elements in the carousel. Useful for composition.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Viewport: {
    dataAttr: dataAttrDoc.Viewport,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
