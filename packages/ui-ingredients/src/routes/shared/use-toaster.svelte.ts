import {createToaster, type CreateToasterReturn} from '$lib/index.js';

let toaster: CreateToasterReturn;

export function useToaster() {
  if (!toaster) {
    toaster = createToaster({
      placement: 'bottom',
      overlap: true,
    });
  }

  return toaster;
}
