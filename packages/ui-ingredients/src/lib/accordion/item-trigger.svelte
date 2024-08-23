<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getAccordionContext, getAccordionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: AccordionItemTriggerProps = $props();

  let context = getAccordionContext();

  let attrs = $derived(
    mergeProps(props, context.getItemTriggerProps(getAccordionItemPropsContext())),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
