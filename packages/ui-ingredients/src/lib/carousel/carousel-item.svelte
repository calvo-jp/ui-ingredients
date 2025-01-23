<script lang="ts" module>
  import type {ItemProps} from '@zag-js/carousel';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface CarouselItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselItemProps = $props();

  let [itemProps, localProps] = $derived(
    createSplitProps<ItemProps>(['index'])(props),
  );

  let carousel = getCarouselContext();
  let mergedProps = $derived(
    mergeProps(carousel.getItemProps(itemProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
