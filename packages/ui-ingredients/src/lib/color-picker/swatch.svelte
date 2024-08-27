<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {SwatchProps} from '@zag-js/color-picker';

  export interface ColorPickerSwatchProps extends Assign<HtmlProps<'div'>, SwatchProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {colorPickerContext, colorPickerSwatchPropsContext} from './context.svelte.js';

  let {value, respectAlpha, children, ...props}: ColorPickerSwatchProps = $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps: SwatchProps = $derived({
    value,
    respectAlpha,
  });

  let attrs = $derived(mergeProps(props, colorPicker.getSwatchProps(swatchProps)));

  colorPickerSwatchPropsContext.set(() => swatchProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
