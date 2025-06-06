import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import omit from 'lodash.omit';
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
      value: {
        type: 'string',
        description: 'The value of the item.',
      },
      valueText: {
        type: 'string',
        description: 'The text value of the item.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the item is disabled.',
      },
      closeOnSelect: {
        type: 'boolean',
        description: 'Whether the menu should close when the item is selected.',
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
  Positioner: {
    dataAttr: dataAttrDoc.Positioner,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  OptionItem: {
    dataAttr: dataAttrDoc.Item,
    context: {
      type: {
        type: "'checkbox' | 'radio'",
        description: 'The type of the item.',
      },
      value: {
        type: 'string',
        description: 'The value of the item',
      },
      checked: {
        type: 'boolean',
        description: 'Whether the item is checked.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the item is disabled.',
      },
      valueText: {
        type: 'string',
        description: 'The text value of the item.',
      },
      closeOnSelect: {
        type: 'boolean',
        description: 'Whether the menu should close when the item is selected.',
      },
      onCheckedChange: {
        type: '(checked:boolean)=>void',
        description: 'Callback for when the item is checked.',
      },
    },
  },
  OptionItemText: {
    dataAttr: dataAttrDoc.ItemText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  OptionItemIndicator: {
    dataAttr: dataAttrDoc.ItemIndicator,
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
        type: '{\n\ttrigger?: string;\n\tcontextTrigger?: string;\n\tcontent?: string;\n\tgroupLabel(id: string)?: string;\n\tgroup(id: string)?: string;\n\tpositioner?: string;\n\tarrow?: string;\n}',
        description:
          'The ids of the elements in the menu. Useful for composition.',
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
