import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {treeViewAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('tree-view');
const rootContext = getApiDoc('tree-view').context;

export default apiEntryFromAnatomy(treeViewAnatomy)({
  Branch: {
    dataAttr: dataAttrDoc.Branch,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      node: {
        type: 'any',
      },
      indexPath: {
        type: 'number[]',
      },
    },
  },
  BranchContent: {
    dataAttr: dataAttrDoc.BranchContent,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  BranchControl: {
    dataAttr: dataAttrDoc.BranchControl,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  BranchIndentGuide: {
    dataAttr: dataAttrDoc.BranchIndentGuide,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  BranchIndicator: {
    dataAttr: dataAttrDoc.BranchIndicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  BranchText: {
    dataAttr: dataAttrDoc.BranchText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  BranchTrigger: {
    dataAttr: dataAttrDoc.BranchTrigger,
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
      node: {
        type: 'any',
      },
      indexPath: {
        type: 'number[]',
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
  Label: {
    dataAttr: dataAttrDoc.Label,
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
        type: '{\n\troot?: string;\n\ttree?: string;\n\tlabel?: string;\n\tnode(value: string)?: string;\n}',
        description: 'The ids of the tree elements. Useful for composition.',
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
  Tree: {
    dataAttr: dataAttrDoc.Tree,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
