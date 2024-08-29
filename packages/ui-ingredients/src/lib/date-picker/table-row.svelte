<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerTableRowProps extends HTMLProps<'tr'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableRowProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let mergedProps = $derived(mergeProps(props, datePicker.getTableRowProps(tableProps)));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tr {...mergedProps}>
    {@render children?.()}
  </tr>
{/if}
