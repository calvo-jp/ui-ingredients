<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerDayTableCellTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerDayTableCellPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerDayTableCellTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerDayTableCellPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getDayTableCellTriggerProps(tableCellProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
