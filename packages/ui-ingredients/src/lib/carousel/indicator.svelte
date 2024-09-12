<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps
    extends Assign<HtmlIngredientProps<'button'>, IndicatorProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getCarouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselIndicatorProps = $props();

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
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
