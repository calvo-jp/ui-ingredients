<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {...props}: ColorPickerHiddenInputProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getHiddenInputProps()));
</script>

<input {...attrs} />
