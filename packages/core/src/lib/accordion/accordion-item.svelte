<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/accordion';

  export interface AccordionItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getAccordionContext,
    setAccordionItemPropsContext,
  } from './accordion-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AccordionItemProps = $props();

  let accordion = getAccordionContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(accordion.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(accordion.getItemProps(itemProps), localProps),
  );

  setAccordionItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
