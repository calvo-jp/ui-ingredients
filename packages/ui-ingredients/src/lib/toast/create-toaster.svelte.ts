import * as toast from '@zag-js/toast';

export interface CreateToasterProps extends toast.StoreProps {}
export interface CreateToasterReturn extends toast.Store {}

export function createToaster(props: CreateToasterProps): CreateToasterReturn {
  const store = $derived(toast.createStore<string>(props));
  return store;
}
