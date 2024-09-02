<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerLabelProps extends HTMLProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerLabelProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(mergeProps(props, colorPicker.getLabelProps()));
</script>

<label {...mergedProps}>
  {@render children?.()}
</label>
