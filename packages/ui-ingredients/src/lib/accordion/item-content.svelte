<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAccordionContext, getAccordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemContentProps = $props();

  let context = getAccordionContext();

  let attrs = $derived(
    mergeProps(props, context.getItemContentProps(getAccordionItemPropsContext())),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
