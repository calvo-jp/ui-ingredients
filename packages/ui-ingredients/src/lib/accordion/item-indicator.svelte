<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface AccordionIndicatorProps extends SvelteHtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useAccordionContext,
    useAccordionItemContext,
  } from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemContext)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
