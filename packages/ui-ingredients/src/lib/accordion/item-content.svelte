<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemContentProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useAccordionContext,
    useAccordionItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: AccordionItemContentProps = $props();

  let context = useAccordionContext();

  let itemProps = useAccordionItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemContentProps(itemProps)),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
