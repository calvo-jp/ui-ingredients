<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerDayTableCellTriggerProps
    extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    datePickerContext,
    datePickerDayTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerDayTableCellTriggerProps =
    $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerDayTableCellPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getDayTableCellTriggerProps(tableCellProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
