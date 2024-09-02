<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {DayTableCellProps, DayTableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerDayTableCellProps
    extends Assign<Omit<HTMLProps<'td'>, 'children'>, DayTableCellProps> {
    asChild?: AsChild<DayTableCellState>;
    children?: Snippet<[DayTableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {
    getDatePickerContext,
    setDatePickerDayTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerDayTableCellProps = $props();

  let datePicker = getDatePickerContext();

  let [tableCellProps, otherProps] = $derived(
    createSplitProps<DayTableCellProps>(['value', 'disabled', 'visibleRange'])(
      props,
    ),
  );

  let tableCellState = $derived(
    datePicker.getDayTableCellState(tableCellProps),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, datePicker.getDayTableCellProps(tableCellProps)),
  );

  setDatePickerDayTableCellPropsContext(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, tableCellState)}
{:else}
  <td {...mergedProps}>
    {@render children?.(tableCellState)}
  </td>
{/if}
