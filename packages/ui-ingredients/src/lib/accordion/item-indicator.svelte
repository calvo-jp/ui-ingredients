<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useAccordionContext,
    useAccordionItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let context = useAccordionContext();

  let itemProps = useAccordionItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(itemProps)),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
