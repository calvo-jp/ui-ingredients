<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/carousel';

  export interface CarouselItemProps
    extends Assign<HtmlIngredientProps<'div', ItemState>, ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselItemProps = $props();

  let carousel = getCarouselContext();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index'])(props),
  );

  let itemState = $derived(carousel.getItemState(itemProps));
  let mergedProps = $derived(
    mergeProps(localProps, carousel.getItemProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
