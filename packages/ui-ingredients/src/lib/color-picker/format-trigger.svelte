<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerFormatTriggerProps extends HTMLProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerFormatTriggerProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getFormatTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
