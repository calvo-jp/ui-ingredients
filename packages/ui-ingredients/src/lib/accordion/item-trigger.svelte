<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useAccordionContext,
    useAccordionItemContext,
  } from './context.svelte.js';

  let {children, ...props}: AccordionItemTriggerProps = $props();

  let context = useAccordionContext();
  let itemContext = useAccordionItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemTriggerProps(itemContext)),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
