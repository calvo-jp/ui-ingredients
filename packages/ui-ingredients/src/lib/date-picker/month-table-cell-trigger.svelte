<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerMonthTableCellTriggerProps
    extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    datePickerContext,
    datePickerTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerMonthTableCellTriggerProps =
    $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerTableCellPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getMonthTableCellTriggerProps(tableCellProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
