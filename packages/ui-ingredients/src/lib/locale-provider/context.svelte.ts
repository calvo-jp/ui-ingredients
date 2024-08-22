import type {Locale} from '@zag-js/i18n-utils';
import {isRTL} from '@zag-js/i18n-utils';
import {getContext, hasContext, setContext} from 'svelte';

export interface CreateLocaleContextProps {
  locale: string;
}

export interface CreateLocaleContextReturn
  extends ReturnType<typeof createLocaleContext> {}

export function createLocaleContext(props: CreateLocaleContextProps) {
  return {
    get locale() {
      return props.locale;
    },
    get dir() {
      return isRTL(props.locale) ? 'rtl' : 'ltr';
    },
  } satisfies Locale;
}

export function setLocaleContext(value: CreateLocaleContextReturn) {
  setContext('LocaleProvider', value);
}

export function useLocaleContext() {
  if (!hasContext('LocaleProvider')) {
    return null;
  } else {
    return getContext<CreateLocaleContextReturn>('LocaleProvider');
  }
}
