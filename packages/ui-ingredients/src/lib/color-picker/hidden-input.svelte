<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {...props}: ColorPickerHiddenInputProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getHiddenInputProps()),
  );
</script>

<input {...mergedProps} />
