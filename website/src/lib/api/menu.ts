import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {menuAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('menu');
const rootContext = getApiDoc('menu').context;

export default apiEntryFromAnatomy(menuAnatomy)({
  Arrow: {
    dataAttr: dataAttrDoc.Arrow,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ArrowTip: {
    dataAttr: dataAttrDoc.ArrowTip,
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
  ContextTrigger: {
    dataAttr: dataAttrDoc.ContextTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Indicator: {
    dataAttr: dataAttrDoc.Indicator,
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
  ItemGroupLabel: {
    dataAttr: dataAttrDoc.ItemGroupLabel,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemIndicator: {
    dataAttr: dataAttrDoc.ItemIndicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ItemText: {
    dataAttr: dataAttrDoc.ItemText,
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
  Root: {
    dataAttr: dataAttrDoc.Root,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode', 'open.controlled'),

      ids: {
        type: '{\n\ttrigger?: string;\n\tcontextTrigger?: string;\n\tcontent?: string;\n\tgroupLabel(id: string)?: string;\n\tgroup(id: string)?: string;\n\tpositioner?: string;\n\tarrow?: string;\n}',
        description:
          'The ids of the elements in the menu. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description: "Whether the menu's open state is controlled by the user",
      },
    },
  },
  Separator: {
    dataAttr: dataAttrDoc.Separator,
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
  TriggerItem: {
    dataAttr: dataAttrDoc.TriggerItem,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
