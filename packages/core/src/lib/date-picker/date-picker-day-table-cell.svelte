<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {DayTableCellProps, DayTableCellState} from '@zag-js/date-picker';

  export interface DatePickerDayTableCellProps
    extends Assign<
      HtmlIngredientProps<'td', HTMLTableCellElement, DayTableCellState>,
      DayTableCellProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    setDatePickerDayTableCellPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerDayTableCellProps = $props();

  let datePicker = getDatePickerContext();

  let [tableCellProps, localProps] = $derived(
    createSplitProps<DayTableCellProps>(['value', 'disabled', 'visibleRange'])(
      props,
    ),
  );

  let tableCellState = $derived(
    datePicker.getDayTableCellState(tableCellProps),
  );

  let mergedProps = $derived(
    mergeProps(datePicker.getDayTableCellProps(tableCellProps), localProps),
  );

  setDatePickerDayTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, tableCellState)}
{:else}
  <td bind:this={ref} {...mergedProps}>
    {@render children?.(tableCellState)}
  </td>
{/if}
