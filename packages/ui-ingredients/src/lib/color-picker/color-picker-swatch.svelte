<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {SwatchProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, SwatchProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    setColorPickerSwatchPropsContext,
  } from './color-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    respectAlpha,
    asChild,
    children,
    ...props
  }: ColorPickerSwatchProps = $props();

  let colorPicker = getColorPickerContext();
  let swatchProps: SwatchProps = $derived({
    value,
    respectAlpha,
  });

  let mergedProps = $derived(
    mergeProps(colorPicker.getSwatchProps(swatchProps), props),
  );

  setColorPickerSwatchPropsContext(() => swatchProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
