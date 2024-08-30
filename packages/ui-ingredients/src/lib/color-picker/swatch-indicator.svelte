<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerSwatchIndicatorProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    colorPickerContext,
    colorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerSwatchIndicatorProps = $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps = colorPickerSwatchPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchIndicatorProps(swatchProps)),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
