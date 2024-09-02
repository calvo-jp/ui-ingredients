<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerPositionerProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerPositionerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getPositionerProps()),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
