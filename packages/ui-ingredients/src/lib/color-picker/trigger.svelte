<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerTriggerProps extends HTMLProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerTriggerProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(mergeProps(props, colorPicker.getTriggerProps()));
</script>

<button type="button" {...mergedProps}>
  {@render children?.()}
</button>
