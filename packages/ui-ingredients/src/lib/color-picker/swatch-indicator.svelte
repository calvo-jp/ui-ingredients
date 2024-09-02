<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerSwatchIndicatorProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerContext,
    getColorPickerSwatchPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerSwatchIndicatorProps = $props();

  let colorPicker = getColorPickerContext();
  let swatchProps = getColorPickerSwatchPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchIndicatorProps(swatchProps)),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
