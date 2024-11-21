import {T} from './t';
import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      rootNode: {
        type: T.union(
          'ShadowRoot',
          'Document',
          'Node',
          T.function(T.union('ShadowRoot', 'Document', 'Node')),
        ),
        description: '',
      },
    },
  },
});
