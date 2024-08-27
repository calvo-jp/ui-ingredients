<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerTableBodyProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerTableBodyProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getTableBodyProps(tableProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
