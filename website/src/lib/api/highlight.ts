import {T} from './t';
import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      query: {
        type: T.union(T.string(), T.array(T.string())),
        description: 'The query to highlight in the text',
      },
      text: {
        type: T.string(),
        description: 'The text to highlight',
      },
      ignoreCase: {
        type: T.boolean(),
        description: 'Whether to ignore case while matching',
      },
      matchAll: {
        type: T.boolean(),
        description: 'Whether to match multiple instances of the query',
      },
    },
  },
});
