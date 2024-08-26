<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerClearTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerClearTriggerProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getClearTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
