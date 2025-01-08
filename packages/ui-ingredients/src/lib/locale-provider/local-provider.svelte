<script lang="ts" module>
  import type {Snippet} from 'svelte';

  export interface LocaleProviderProps {
    locale: string;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {isRTL} from '@zag-js/i18n-utils';
  import {setLocaleContext} from './local-provider-context.svelte.js';

  let {children, ...props}: LocaleProviderProps = $props();

  setLocaleContext(() => ({
    dir: isRTL(props.locale) ? 'rtl' : 'ltr',
    locale: props.locale,
  }));
</script>

{@render children()}
