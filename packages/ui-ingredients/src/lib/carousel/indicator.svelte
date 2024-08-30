<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/carousel';

  export interface CarouselIndicatorProps
    extends Assign<HTMLProps<'button'>, IndicatorProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {carouselContext} from './context.svelte.js';

  let {asChild, children, ...props}: CarouselIndicatorProps = $props();

  let carousel = carouselContext.get();

  let [indicatorProps, otherProps] = $derived(
    createSplitProps<IndicatorProps>(['index', 'readOnly'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, carousel.getIndicatorProps(indicatorProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
