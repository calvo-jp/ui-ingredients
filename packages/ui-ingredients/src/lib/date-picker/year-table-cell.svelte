<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {TableCellProps, TableCellState} from '@zag-js/date-picker';
  import type {Snippet} from 'svelte';

  export interface DatePickerYearTableCellProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, TableCellProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>, state: TableCellState]>;
    children?: Snippet<[state: TableCellState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {value, disabled, columns, asChild, children, ...props}: DatePickerYearTableCellProps =
    $props();

  let datePicker = datePickerContext.get();
  let tableCellProps: TableCellProps = $derived({
    value,
    disabled,
    columns,
  });

  let state = $derived(datePicker.getYearTableCellState(tableCellProps));
  let attrs = $derived(mergeProps(props, datePicker.getYearTableCellProps(tableCellProps)));

  datePickerTableCellPropsContext.set(() => tableCellProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
