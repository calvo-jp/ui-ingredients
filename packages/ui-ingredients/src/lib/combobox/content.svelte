<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface ComboboxContentProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxContentProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
