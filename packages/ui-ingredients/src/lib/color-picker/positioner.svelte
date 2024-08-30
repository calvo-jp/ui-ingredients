<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerPositionerProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerPositionerProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getPositionerProps()),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
