import {apiEntry} from './utils';

export default apiEntry<'Root'>({
  Root: {
    context: {
      present: {
        type: 'string',
        description: 'Whether the element is present',
      },
      lazyMount: {
        type: 'boolean',
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: 'boolean',
        description: 'Whether to keep the component mounted after exit.',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-state': '"open" | "closed"',
    },
  },
});
