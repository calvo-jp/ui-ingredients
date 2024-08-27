<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerInputProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getInputProps()));
</script>

<input {...attrs} />
