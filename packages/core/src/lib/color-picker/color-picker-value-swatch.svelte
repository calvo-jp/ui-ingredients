<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ColorPickerValueSwatchProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {
    respectAlpha?: boolean;
  }
</script>

<script lang="ts">
  import type {SwatchProps} from '@zag-js/color-picker';
  import {mergeProps} from '@zag-js/svelte';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    respectAlpha,
    asChild,
    children,
    ...props
  }: ColorPickerValueSwatchProps = $props();

  let colorPicker = getColorPickerContext();

  let swatchProps: SwatchProps = $derived({
    respectAlpha,
    value: colorPicker.valueAsString,
  });

  let mergedProps = $derived(
    mergeProps(colorPicker.getSwatchProps(swatchProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
