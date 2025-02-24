import {reflect} from '@zag-js/svelte';
import * as toast from '@zag-js/toast';

export interface CreateToasterProps extends toast.StoreProps {}
export interface CreateToasterReturn extends toast.Store {}

export function createToaster(props: CreateToasterProps): CreateToasterReturn {
  return reflect(() => toast.createStore<string>(props));
}
