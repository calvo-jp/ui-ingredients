<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerTableHeadProps extends HTMLProps<'thead'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    datePickerContext,
    datePickerTablePropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableHeadProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableHeadProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <thead {...mergedProps}>
    {@render children?.()}
  </thead>
{/if}
