<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {MarkerProps} from '@zag-js/slider';

  export interface SliderMarkerProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
      props,
      slider.getMarkerProps({
        value,
      }),
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
