<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerContentProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerContentProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
