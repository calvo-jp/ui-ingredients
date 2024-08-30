<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerTableBodyProps extends HTMLProps<'tbody'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    datePickerContext,
    datePickerTablePropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableBodyProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableBodyProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tbody {...mergedProps}>
    {@render children?.()}
  </tbody>
{/if}
