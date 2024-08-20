<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface NumberInputDecrementTriggerProps
    extends SvelteHtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {children, ...props}: NumberInputDecrementTriggerProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.getDecrementTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
