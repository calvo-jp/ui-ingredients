<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerMonthTableCellTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerMonthTableCellTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerTableCellPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getMonthTableCellTriggerProps(tableCellProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
