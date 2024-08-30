<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerSwatchGroupProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerSwatchGroupProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getSwatchGroupProps()),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
