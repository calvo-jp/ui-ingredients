<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSliderContext} from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SliderLabelProps = $props();

  let slider = getSliderContext();

  let mergedProps = $derived(mergeProps(props, slider.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
