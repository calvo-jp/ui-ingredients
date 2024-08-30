<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {SwatchProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchProps
    extends Assign<HTMLProps<'div'>, SwatchProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    colorPickerContext,
    colorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {value, respectAlpha, children, ...props}: ColorPickerSwatchProps =
    $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps: SwatchProps = $derived({
    value,
    respectAlpha,
  });

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchProps(swatchProps)),
  );

  colorPickerSwatchPropsContext.set(() => swatchProps);
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
