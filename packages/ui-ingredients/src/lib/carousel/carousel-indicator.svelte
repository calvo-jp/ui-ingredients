<script lang="ts" module>
  import type {IndicatorProps} from '@zag-js/carousel';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface CarouselIndicatorProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      IndicatorProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselIndicatorProps = $props();

  let [indicatorProps, localProps] = $derived(
    createSplitProps<IndicatorProps>(['index', 'readOnly'])(props),
  );

  let carousel = getCarouselContext();
  let mergedProps = $derived(
    mergeProps(carousel.getIndicatorProps(indicatorProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
