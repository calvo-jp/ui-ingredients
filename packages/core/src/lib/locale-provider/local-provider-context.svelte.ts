import type {Locale} from '@zag-js/i18n-utils';
import {createContext} from '../create-context.svelte.js';

export const [getLocaleContext, setLocaleContext] = createContext<Locale>(
  'LocaleProvider',
  false,
);
