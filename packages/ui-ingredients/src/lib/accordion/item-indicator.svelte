<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionIndicatorProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, accordion.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
