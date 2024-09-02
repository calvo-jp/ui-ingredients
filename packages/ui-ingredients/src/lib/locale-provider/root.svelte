<script lang="ts" module>
  import type {Snippet} from 'svelte';

  export interface LocaleProviderProps {
    locale: string;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {isRTL, type Locale} from '@zag-js/i18n-utils';
  import {setLocaleContext} from './context.svelte.js';

  let {children, ...props}: LocaleProviderProps = $props();

  let locale: Locale = $derived({
    locale: props.locale,
    dir: isRTL(props.locale) ? 'rtl' : 'ltr',
  });

  setLocaleContext(() => locale);
</script>

{@render children()}
