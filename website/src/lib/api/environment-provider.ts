import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      rootNode: {
        type: 'ShadowRoot | Document | Node | (() => ShadowRoot | Document | Node)',
        description: '',
      },
    },
  },
});
