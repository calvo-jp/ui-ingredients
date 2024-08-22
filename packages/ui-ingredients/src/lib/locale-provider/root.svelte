<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {CreateLocaleContextProps} from './context.svelte.js';

  export interface LocaleProviderProps extends CreateLocaleContextProps {
    children: Snippet;
  }
</script>

<script lang="ts">
  import {createLocaleContext, setLocaleContext} from './context.svelte.js';

  let {children, ...props}: LocaleProviderProps = $props();

  let context = createLocaleContext(props);

  setLocaleContext(context);
</script>

{@render children()}
