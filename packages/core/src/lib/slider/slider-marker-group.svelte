<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SliderMarkerGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderMarkerGroupProps = $props();

  let slider = getSliderContext();

  let mergedProps = $derived(mergeProps(slider.getMarkerGroupProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
