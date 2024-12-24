import {createContext} from '../create-context.svelte.js';
import type {CreateAlertReturn} from './create-alert.svelte.js';

export const [getAlertContext, setAlertContext] =
  createContext<CreateAlertReturn>('Alert');
