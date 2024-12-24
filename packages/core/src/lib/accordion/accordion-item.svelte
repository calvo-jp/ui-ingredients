<script lang="ts" module>
  import type {ItemProps, ItemState} from '@zag-js/accordion';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface AccordionItemProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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
