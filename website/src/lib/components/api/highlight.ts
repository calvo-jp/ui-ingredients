import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      query: {
        type: 'string | string[]',
        description: 'The query to highlight in the text',
      },
      text: {
        type: 'string',
        description: 'The text to highlight',
      },
      ignoreCase: {
        type: 'boolean',
        description: 'Whether to ignore case while matching',
      },
      matchAll: {
        type: 'boolean',
        description: 'Whether to match multiple instances of the query',
      },
    },
  },
});
