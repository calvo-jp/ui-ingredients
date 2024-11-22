import {alertAnatomy} from 'ui-ingredients';
import {T} from './t';
import {apiEntryFromAnatomy} from './utils';

export default apiEntryFromAnatomy(alertAnatomy)({
  Root: {
    context: {
      asChild: {
        type: T.snippet(),
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
        type: T.snippet(),
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
        type: T.snippet(),
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
        type: T.snippet(),
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'alert',
      'data-part': 'indicator',
    },
  },
});
