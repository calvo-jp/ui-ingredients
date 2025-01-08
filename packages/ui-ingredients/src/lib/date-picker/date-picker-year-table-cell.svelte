<script lang="ts" module>
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface DatePickerYearTableCellProps
    extends Assign<
      HtmlIngredientProps<'td', HTMLTableCellElement, TableCellState>,
      TableCellProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {
    getDatePickerContext,
    setDatePickerTableCellPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerYearTableCellProps = $props();

  let datePicker = getDatePickerContext();

  let [tableCellProps, localProps] = $derived(
    createSplitProps<TableCellProps>(['columns', 'disabled', 'value'])(props),
  );

  let tableCellState = $derived(
    datePicker.getYearTableCellState(tableCellProps),
  );

  let mergedProps = $derived(
    mergeProps(datePicker.getYearTableCellProps(tableCellProps), localProps),
  );

  setDatePickerTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, tableCellState)}
{:else}
  <td bind:this={ref} {...mergedProps}>
    {@render children?.(tableCellState)}
  </td>
{/if}
