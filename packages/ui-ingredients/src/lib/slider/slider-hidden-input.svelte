<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SliderHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getSliderContext,
    getSliderThumbPropsContext,
  } from './slider-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: SliderHiddenInputProps = $props();

  let slider = getSliderContext();
  let thumbProps = getSliderThumbPropsContext();
  let mergedProps = $derived(
    mergeProps(slider.getHiddenInputProps(thumbProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
