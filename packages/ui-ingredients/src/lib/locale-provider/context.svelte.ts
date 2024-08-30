import {Context} from '$lib/context.svelte.js';
import type {Locale} from '@zag-js/i18n-utils';

export const localeContext = new Context<Locale>('LocaleProvider', false);

export const getLocaleContext = (): Locale | null => localeContext.get();
