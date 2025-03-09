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
  import {reflect} from '@zag-js/svelte';
  import {setCollapsibleContext} from '../collapsible/collapsible-context.svelte.js';
  import {createCollapsible} from '../collapsible/create-collapsible.svelte.js';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
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

  let uid = $props.id();

  let accordion = getAccordionContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(accordion.getItemState(itemProps));
  let contentProps = $derived(accordion.getItemContentProps(itemProps));
  let collapsible = createCollapsible(
    reflect(() => ({
      id: uid,
      ids: {content: contentProps.id},
      open: itemState.expanded,
      disabled: itemState.disabled,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      collapsible.getRootProps(),
      accordion.getItemProps(itemProps),
      localProps,
    ),
  );

  setCollapsibleContext(collapsible);
  setAccordionItemPropsContext(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
