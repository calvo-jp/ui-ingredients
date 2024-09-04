<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';

  export interface DatePickerYearTableCellProps
    extends Assign<HtmlIngredientProps<'td', TableCellState>, TableCellProps> {}
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
