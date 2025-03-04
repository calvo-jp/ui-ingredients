import {createToaster} from '$lib/index.js';

export const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  duration: 1000 * 5,
});
