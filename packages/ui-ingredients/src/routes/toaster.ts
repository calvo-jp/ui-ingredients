import {createToastStore} from '$lib/index.js';

export const toaster = createToastStore({
  placement: 'bottom',
  overlap: true,
});
