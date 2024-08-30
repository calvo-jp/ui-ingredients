<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerTableHeaderProps extends HTMLProps<'th'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {
    datePickerContext,
    datePickerTablePropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableHeaderProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableHeaderProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <th {...mergedProps}>
    {@render children?.()}
  </th>
{/if}
