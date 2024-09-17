<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {TableProps} from '@zag-js/date-picker';

  export interface DatePickerTableProps
    extends Assign<
      HtmlIngredientProps<'table', HTMLTableElement>,
      Omit<TableProps, 'view'>
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerViewPropsContext,
    setDatePickerTablePropsContext,
  } from './date-picker-context.svelte.js';

  let {
    id,
    columns,
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerTableProps = $props();

  let datePicker = getDatePickerContext();
  let viewProps = getDatePickerViewPropsContext();
  let tableProps: TableProps = $derived({...viewProps, id, columns});

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableProps(tableProps)),
  );

  setDatePickerTablePropsContext(() => tableProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <table bind:this={e} {...mergedProps}>
    {@render children?.()}
  </table>
{/if}
