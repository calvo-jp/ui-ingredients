import {T} from './t';
import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      container: {
        type: 'HTMLElement',
        description: 'The element to render the element into',
      },
      disabled: {
        type: T.boolean(),
        description: 'Whether the portal is disabled',
      },
    },
  },
});
