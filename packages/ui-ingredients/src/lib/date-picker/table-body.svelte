<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface DatePickerTableBodyProps extends HtmlProps<'tbody'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableBodyProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getTableBodyProps(tableProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <tbody {...attrs}>
    {@render children?.()}
  </tbody>
{/if}
