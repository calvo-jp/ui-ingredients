import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      locale: {
        type: 'string',
        description: 'The locale to use for the application.',
        defaultValue: "'en-US'",
      },
    },
  },
});
