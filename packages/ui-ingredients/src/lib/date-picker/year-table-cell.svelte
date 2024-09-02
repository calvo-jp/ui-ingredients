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
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getDatePickerContext,
    setDatePickerTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerYearTableCellProps = $props();

  let datePicker = getDatePickerContext();

  let [tableCellProps, otherProps] = $derived(
    createSplitProps<TableCellProps>(['value', 'disabled', 'columns'])(props),
  );

  let tableCellState = $derived(
    datePicker.getYearTableCellState(tableCellProps),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, datePicker.getYearTableCellProps(tableCellProps)),
  );

  setDatePickerTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, tableCellState)}
{:else}
  <td {...mergedProps}>
    {@render children?.(tableCellState)}
  </td>
{/if}
