import {T} from './t';
import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      present: {
        type: T.string(),
        description: 'Whether the element is present',
      },
      lazyMount: {
        type: T.boolean(),
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: T.boolean(),
        description: 'Whether to keep the component mounted after exit.',
      },
      asChild: {
        type: T.snippet(),
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-state': '"open" | "closed"',
    },
  },
});
