import {apiEntry} from './utils';

export default apiEntry({
  Root: {
    context: {
      disabled: {
        type: 'boolean',
        description: 'Whether the focus trap is disabled',
      },
      returnFocusOnDeactivate: {
        type: 'boolean',
        description:
          'Whether the focus trap should return focus to the previously focused element when deactivated',
      },
    },
  },
});
