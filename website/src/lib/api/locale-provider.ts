import {T} from './t';
import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      locale: {
        type: T.string(),
        description: 'The locale to use for the application.',
        defaultValue: T.literal('en-US'),
      },
    },
  },
});
