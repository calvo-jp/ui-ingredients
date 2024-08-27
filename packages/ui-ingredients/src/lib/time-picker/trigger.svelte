<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerTriggerProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
