<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerControlProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerControlProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(mergeProps(props, colorPicker.getControlProps()));
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
