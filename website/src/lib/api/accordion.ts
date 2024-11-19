import {getDataAttrDoc} from '@zag-js/docs';
import {accordionAnatomy} from 'ui-ingredients';
import {T} from './t';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('accordion');

export default apiEntryFromAnatomy(accordionAnatomy)({
  Root: {
    context: {
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
      collapsible: {
        type: T.boolean(),
        defaultValue: 'false',
        description:
          'Whether an item can be closed after it has been expanded.',
      },
      disabled: {
        type: T.boolean(),
        description: 'Whether the items are disabled',
      },
      id: {
        type: T.string(),
        description: 'The unique identifier of the machine.',
      },
      ids: {
        type: T.partial(
          T.interface({
            root: T.string(),
            item: T.string(),
            itemContent: T.string(),
            itemTrigger: T.string(),
          }),
        ),
        description:
          'The ids of the elements in the accordion. Useful for composition.',
      },
      multiple: {
        type: T.boolean(),
        defaultValue: 'false',
        description: 'Whether multple items can be expanded at the same time.',
      },
      onFocusChange: {
        type: T.function('void', 'details: FocusChangeDetails'),
        description: 'The callback fired when the focused item changes.',
      },
      onValueChange: {
        type: T.function('void', 'details: ValueChangeDetails'),
        description:
          'The callback fired when the state of expanded/collapsed items changes.',
      },
      orientation: {
        type: T.union('"horizontal"', '"vertical"'),
        defaultValue: '"vertical"',
        description: 'The orientation of the items.',
      },
      value: {
        type: T.array(T.string()),
        description:
          "The 'value' of the items that are currently being expanded.",
      },
    },
    dataAttr: dataAttrDoc.Root,
  },
  Item: {
    context: {
      value: {
        type: T.string(),
        description: 'The value of the item.',
      },
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
      disabled: {
        type: T.boolean(),
        description: 'Whether the item is disabled.',
      },
    },
    dataAttr: dataAttrDoc.Item,
  },
  ItemTrigger: {
    context: {
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
    },
    dataAttr: dataAttrDoc.ItemTrigger,
  },
  ItemContent: {
    context: {
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
    },
    dataAttr: dataAttrDoc.ItemContent,
  },
  ItemIndicator: {
    context: {
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
    },
    dataAttr: dataAttrDoc.ItemIndicator,
  },
});
