<script lang="ts" module>
  import type {MarkerProps} from '@zag-js/slider';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SliderMarkerProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: SliderMarkerProps = $props();

  let slider = getSliderContext();

  let mergedProps = $derived(
    mergeProps(
      slider.getMarkerProps({
        value,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
