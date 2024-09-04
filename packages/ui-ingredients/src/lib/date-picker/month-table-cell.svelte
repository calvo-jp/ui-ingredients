<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';

  export interface DatePickerMonthTableCellProps
    extends Assign<HtmlIngredientProps<'td', TableCellState>, TableCellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getDatePickerContext,
    setDatePickerTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerMonthTableCellProps = $props();

  let datePicker = getDatePickerContext();

  let [tableCellProps, otherProps] = $derived(
    createSplitProps<TableCellProps>(['value', 'disabled', 'columns'])(props),
  );

  let tableCellState = $derived(
    datePicker.getMonthTableCellState(tableCellProps),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, datePicker.getMonthTableCellProps(tableCellProps)),
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
