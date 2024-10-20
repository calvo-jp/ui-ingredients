<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderDraggingIndicatorProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSliderContext,
    getSliderThumbPropsContext,
  } from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderDraggingIndicatorProps = $props();

  let slider = getSliderContext();
  let thumbProps = getSliderThumbPropsContext();

  let mergedProps = $derived(
    mergeProps(slider.getDraggingIndicatorProps(thumbProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
