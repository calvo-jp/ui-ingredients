<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerControlProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
