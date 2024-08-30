<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/carousel';
  import type {Snippet} from 'svelte';

  export interface CarouselItemProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselItemProps = $props();

  let carousel = carouselContext.get();

  let [itemProps, otherProps] = $derived(
    createSplitProps<ItemProps>(['index'])(props),
  );

  let itemState = $derived(carousel.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(otherProps, carousel.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
