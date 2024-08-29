<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerMonthTableCellProps
    extends Assign<Omit<HtmlProps<'td'>, 'children'>, TableCellProps> {
    asChild?: AsChild<GenericHtmlProps, TableCellState>;
    children?: Snippet<[state: TableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {value, disabled, columns, asChild, children, ...props}: DatePickerMonthTableCellProps =
    $props();

  let datePicker = datePickerContext.get();
  let tableCellProps: TableCellProps = $derived({
    value,
    disabled,
    columns,
  });

  let state = $derived(datePicker.getMonthTableCellState(tableCellProps));
  let attrs = $derived(mergeProps(props, datePicker.getMonthTableCellProps(tableCellProps)));

  datePickerTableCellPropsContext.set(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <td {...attrs}>
    {@render children?.(state)}
  </td>
{/if}
