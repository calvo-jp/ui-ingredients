import {createContext} from '$lib/create-context.svelte.js';
import type {Locale} from '@zag-js/i18n-utils';

export const [getLocaleContext, setLocaleContext] = createContext<Locale>(
  'LocaleProvider',
  false,
);
