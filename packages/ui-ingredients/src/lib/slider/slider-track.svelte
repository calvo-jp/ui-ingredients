<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SliderTrackProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderTrackProps = $props();

  let slider = getSliderContext();
  let mergedProps = $derived(mergeProps(slider.getTrackProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
