import * as toast from '@zag-js/toast';
import {createContext} from '../create-context.svelte.js';

export const [getToastContext, setToastContext] =
  createContext<toast.Api>('Toast');
