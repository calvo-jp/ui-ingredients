<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {TableProps} from '@zag-js/date-picker';

  export interface DatePickerTableProps
    extends Assign<HTMLProps<'table'>, Omit<TableProps, 'view'>> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    datePickerContext,
    datePickerTablePropsContext,
    datePickerViewPropsContext,
  } from './context.svelte.js';

  let {id, columns, asChild, children, ...props}: DatePickerTableProps = $props();

  let datePicker = datePickerContext.get();
  let viewProps = datePickerViewPropsContext.get();
  let tableProps: TableProps = $derived({...viewProps, id, columns});

  let mergedProps = $derived(mergeProps(props, datePicker.getTableProps(tableProps)));

  datePickerTablePropsContext.set(() => tableProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <table {...mergedProps}>
    {@render children?.()}
  </table>
{/if}
