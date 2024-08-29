<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerYearTableCellProps
    extends Assign<Omit<HTMLProps<'td'>, 'children'>, TableCellProps> {
    asChild?: AsChild<TableCellState>;
    children?: Snippet<[TableCellState]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerYearTableCellProps = $props();

  let datePicker = datePickerContext.get();

  let [tableCellProps, otherProps] = createSplitProps<TableCellProps>([
    'value',
    'disabled',
    'columns',
  ])(props);

  let tableCellState = $derived(datePicker.getYearTableCellState(tableCellProps));

  let mergedProps = $derived(
    mergeProps(otherProps, datePicker.getYearTableCellProps(tableCellProps)),
  );

  datePickerTableCellPropsContext.set(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, tableCellState)}
{:else}
  <td {...mergedProps}>
    {@render children?.(tableCellState)}
  </td>
{/if}
