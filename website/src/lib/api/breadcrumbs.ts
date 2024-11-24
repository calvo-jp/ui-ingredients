import {breadcrumbsAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

export default apiEntryFromAnatomy(breadcrumbsAnatomy)({
  Item: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-part': 'breadcrumbs',
      'data-scope': 'item',
    },
  },
  Link: {
    context: {
      href: {
        type: 'string',
        description: 'The link to navigate to.',
      },
      current: {
        type: 'boolean',
        description: 'Whether the link is the current page.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-part': 'breadcrumbs',
      'data-scope': 'link',
      'data-current': 'Present when current is true',
      'data-disabled': 'Present when current is true',
    },
  },
  List: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-part': 'breadcrumbs',
      'data-scope': 'list',
    },
  },
  Root: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-part': 'breadcrumbs',
      'data-scope': 'root',
    },
  },
  Separator: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-part': 'breadcrumbs',
      'data-scope': 'separator',
    },
  },
});
