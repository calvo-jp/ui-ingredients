<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface AccordionItemContentProps extends SvelteHtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useAccordionContext,
    useAccordionItemContext,
  } from './context.svelte.js';

  let {children, ...props}: AccordionItemContentProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemContentProps(itemContext)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
