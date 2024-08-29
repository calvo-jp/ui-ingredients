import {createToaster, type CreateToasterReturn} from '$lib/index.js';

let toaster: CreateToasterReturn;

export function useToaster() {
  if (!toaster) {
    toaster = createToaster({
      placement: 'bottom-end',
      overlap: true,
    });
  }

  return toaster;
}
