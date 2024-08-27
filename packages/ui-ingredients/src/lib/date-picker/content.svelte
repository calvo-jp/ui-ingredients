<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerContentProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
