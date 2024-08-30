<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/accordion';
  import type {Snippet} from 'svelte';

  export interface AccordionItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    accordionContext,
    accordionItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: AccordionItemProps = $props();

  let accordion = accordionContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['value', 'disabled'])(props),
  );

  let itemState = $derived(accordion.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(otherProps, accordion.getItemProps(itemProps)),
  );

  accordionItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
