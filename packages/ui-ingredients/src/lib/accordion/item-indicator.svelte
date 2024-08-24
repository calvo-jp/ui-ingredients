<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {accordionContext, accordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let context = accordionContext.get();
  let itemProps = accordionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemIndicatorProps(itemProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
