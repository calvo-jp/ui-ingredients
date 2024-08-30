<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerEyeDropperTriggerProps
    extends HTMLProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerEyeDropperTriggerProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getEyeDropperTriggerProps()),
  );
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
