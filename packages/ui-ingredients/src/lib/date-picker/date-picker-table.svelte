<script lang="ts" module>
  import type {TableProps} from '@zag-js/date-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface DatePickerTableProps
    extends Assign<
      HtmlIngredientProps<'table', HTMLTableElement>,
      Omit<TableProps, 'view'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getDatePickerContext,
    getDatePickerViewPropsContext,
    setDatePickerTablePropsContext,
  } from './date-picker-context.svelte.js';

  let {
    id,
    columns,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerTableProps = $props();

  let datePicker = getDatePickerContext();
  let viewProps = getDatePickerViewPropsContext();
  let tableProps: TableProps = $derived({...viewProps, id, columns});
  let mergedProps = $derived(
    mergeProps(datePicker.getTableProps(tableProps), props),
  );

  setDatePickerTablePropsContext(() => tableProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <table bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </table>
{/if}
