import {omit} from '$lib/utils';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {datePickerAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('date-picker');
const rootContext = getApiDoc('date-picker').context;

export default apiEntryFromAnatomy(datePickerAnatomy)({
  ClearTrigger: {
    dataAttr: dataAttrDoc.ClearTrigger,
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
  Control: {
    dataAttr: dataAttrDoc.Control,
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
      index: {
        type: 'number',
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
  MonthSelect: {
    dataAttr: dataAttrDoc.MonthSelect,
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
  Positioner: {
    dataAttr: dataAttrDoc.Positioner,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  PresetTrigger: {
    dataAttr: dataAttrDoc.PresetTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      value: {
        type: 'PresetTriggerValue',
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
  RangeText: {
    dataAttr: dataAttrDoc.RangeText,
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
        type: '{\n\troot?: string;\n\tlabel(index: number)?: string;\n\ttable(id: string)?: string;\n\ttableHeader(id: string)?: string;\n\ttableBody(id: string)?: string;\n\ttableRow(id: string)?: string;\n\tcontent?: string;\n\tcellTrigger(id: string)?: string;\n\tprevTrigger(view: DateView)?: string;\n\tclearTrigger: string;\n\tcontrol: string;\n\tinput(index: number)?: string;\n\ttrigger?: string;\n\tmonthSelect?: string;\n\tyearSelect?: string;\n\tpositioner?: string;\n}',
        description:
          'The ids of the elements in the date picker. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description:
          'Whether the datepicker open state is controlled by the user',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      lazyMount: {
        type: 'boolean',
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: 'boolean',
        description: 'Whether to keep the component mounted after exit.',
      },
    },
  },
  Table: {
    dataAttr: dataAttrDoc.Table,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      columns: {
        type: 'number',
      },
    },
  },
  TableBody: {
    dataAttr: dataAttrDoc.TableBody,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  TableCell: {
    dataAttr: dataAttrDoc.TableCell,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  TableCellTrigger: {
    dataAttr: dataAttrDoc.TableCellTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  TableHead: {
    dataAttr: dataAttrDoc.TableHead,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  TableHeader: {
    dataAttr: dataAttrDoc.TableHeader,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  TableRow: {
    dataAttr: dataAttrDoc.TableRow,
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
  View: {
    dataAttr: dataAttrDoc.View,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      view: {
        type: 'DateView',
      },
    },
  },
  ViewControl: {
    dataAttr: dataAttrDoc.ViewControl,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ViewTrigger: {
    dataAttr: dataAttrDoc.ViewTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  YearSelect: {
    dataAttr: dataAttrDoc.YearSelect,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
