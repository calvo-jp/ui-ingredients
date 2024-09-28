<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      IndicatorProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getCarouselContext} from './carousel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CarouselIndicatorProps = $props();

  let carousel = getCarouselContext();

  let [indicatorProps, localProps] = $derived(
    createSplitProps<IndicatorProps>(['index', 'readOnly'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, carousel.getIndicatorProps(indicatorProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
