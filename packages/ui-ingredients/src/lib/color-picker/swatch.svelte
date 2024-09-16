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
  } from './context.svelte.js';

  let {value, respectAlpha, children, ...props}: ColorPickerSwatchProps =
    $props();

  let colorPicker = getColorPickerContext();
  let swatchProps: SwatchProps = $derived({
    value,
    respectAlpha,
  });

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchProps(swatchProps)),
  );

  setColorPickerSwatchPropsContext(() => swatchProps);
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
