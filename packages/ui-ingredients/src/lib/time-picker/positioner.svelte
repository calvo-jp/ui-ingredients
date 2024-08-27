<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerPositionerProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
