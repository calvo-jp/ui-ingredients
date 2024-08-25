<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerYearTableCellProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, TableCellProps> {
    children?: Snippet<[state: TableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {
    /**/
    value,
    disabled,
    columns,
    children,
    ...props
  }: DatePickerYearTableCellProps = $props();

  let datePicker = datePickerContext.get();
  let tableCellProps: TableCellProps = $derived({
    value,
    disabled,
    columns,
  });

  let state = $derived(datePicker.getYearTableCellState(tableCellProps));
  let attrs = $derived(mergeProps(props, datePicker.getYearTableCellProps(tableCellProps)));

  datePickerTableCellPropsContext.set(() => tableCellProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
