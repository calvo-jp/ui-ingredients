<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerYearTableCellTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerYearTableCellTriggerProps = $props();

  let context = datePickerContext.get();

  let tableCellProps = datePickerTableCellPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getYearTableCellTriggerProps(tableCellProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
