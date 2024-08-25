<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {DayTableCellProps, DayTableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerDayTableCellProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, DayTableCellProps> {
    children?: Snippet<[state: DayTableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerDayTableCellPropsContext} from './context.svelte.js';

  let {
    /**/
    value,
    disabled,
    visibleRange,
    children,
    ...props
  }: DatePickerDayTableCellProps = $props();

  let context = datePickerContext.get();

  let tableCellProps: DayTableCellProps = $derived({
    value,
    disabled,
    visibleRange,
  });

  let state = $derived(context.getDayTableCellState(tableCellProps));
  let attrs = $derived(mergeProps(props, context.getDayTableCellProps(tableCellProps)));

  datePickerDayTableCellPropsContext.set(() => tableCellProps);
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
