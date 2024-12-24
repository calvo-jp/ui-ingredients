<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerSwatchIndicatorProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getColorPickerContext,
    getColorPickerSwatchPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ColorPickerSwatchIndicatorProps = $props();

  let colorPicker = getColorPickerContext();
  let swatchProps = getColorPickerSwatchPropsContext();

  let mergedProps = $derived(
    mergeProps(colorPicker.getSwatchIndicatorProps(swatchProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
