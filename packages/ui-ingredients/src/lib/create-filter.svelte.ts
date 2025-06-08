import {
  createFilter as zagCreateFilter,
  type FilterOptions,
} from '@zag-js/i18n-utils';
import {getLocaleContext} from './locale-provider/locale-provider-context.svelte.js';

export interface CreateFilterProps extends FilterOptions {}

export function createFilter(props: CreateFilterProps = {}) {
  const locale = getLocaleContext();
  const options = $derived({
    ...props,
    locale: props.locale ?? locale?.locale,
  });

  return zagCreateFilter(options);
}
