<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerTriggerProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
