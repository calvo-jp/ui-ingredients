<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionIndicatorProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAccordionContext, getAccordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionIndicatorProps = $props();

  let context = getAccordionContext();

  let attrs = $derived(
    mergeProps(props, context.getItemIndicatorProps(getAccordionItemPropsContext())),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
