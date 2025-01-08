import {alertAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

export default apiEntryFromAnatomy(alertAnatomy)({
  Root: {
    context: {
      id: {
        type: 'string',
      },
      ids: {
        type: '{\n\troot?: string;\n\ttitle?: string;\n\tdescription?: string;\n\tindicator?: string;\n}',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': '"accordion"',
      'data-part': '"root"',
    },
  },
  Title: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'alert',
      'data-part': 'title',
    },
  },
  Description: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'alert',
      'data-part': 'description',
    },
  },
  Indicator: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'alert',
      'data-part': 'indicator',
    },
  },
});
