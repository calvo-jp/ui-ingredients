<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AccordionItemContentProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getAccordionContext,
    getAccordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemContentProps = $props();

  let accordion = getAccordionContext();
  let itemProps = getAccordionItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, accordion.getItemContentProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
