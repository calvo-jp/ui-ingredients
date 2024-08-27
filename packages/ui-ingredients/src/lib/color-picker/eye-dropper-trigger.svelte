<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerEyeDropperTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerEyeDropperTriggerProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getEyeDropperTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
