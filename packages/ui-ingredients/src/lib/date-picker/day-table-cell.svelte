<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {DayTableCellProps, DayTableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerDayTableCellProps
    extends Assign<Omit<HtmlProps<'td'>, 'children'>, DayTableCellProps> {
    asChild?: AsChild<GenericHtmlProps, DayTableCellState>;
    children?: Snippet<[state: DayTableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerDayTableCellPropsContext} from './context.svelte.js';

  let {value, disabled, visibleRange, asChild, children, ...props}: DatePickerDayTableCellProps =
    $props();

  let datePicker = datePickerContext.get();
  let tableCellProps: DayTableCellProps = $derived({
    value,
    disabled,
    visibleRange,
  });

  let state = $derived(datePicker.getDayTableCellState(tableCellProps));
  let attrs = $derived(mergeProps(props, datePicker.getDayTableCellProps(tableCellProps)));

  datePickerDayTableCellPropsContext.set(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <td {...attrs}>
    {@render children?.(state)}
  </td>
{/if}
