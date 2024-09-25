<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerValueSwatchProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {
    respectAlpha?: boolean;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import type {SwatchProps} from '@zag-js/color-picker';
  import {getColorPickerContext} from './color-picker-context.svelte.js';

  let {
    this: e,
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
    mergeProps(props, colorPicker.getSwatchProps(swatchProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
