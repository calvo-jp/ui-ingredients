<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerSwatchIndicatorProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {colorPickerContext, colorPickerSwatchPropsContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerSwatchIndicatorProps = $props();

  let colorPicker = colorPickerContext.get();
  let swatchProps = colorPickerSwatchPropsContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getSwatchIndicatorProps(swatchProps)));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
