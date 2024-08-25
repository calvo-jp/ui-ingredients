<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {TableProps} from '@zag-js/date-picker';

  export interface DatePickerTableProps
    extends Assign<HtmlProps<'div'>, Omit<TableProps, 'view'>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    datePickerContext,
    datePickerTablePropsContext,
    datePickerViewPropsContext,
  } from './context.svelte.js';

  let {id, columns, children, ...props}: DatePickerTableProps = $props();

  let datePicker = datePickerContext.get();
  let viewProps = datePickerViewPropsContext.get();
  let tableProps: TableProps = $derived({...viewProps, id, columns});

  let attrs = $derived(mergeProps(props, datePicker.getTableProps(tableProps)));

  datePickerTablePropsContext.set(() => tableProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
