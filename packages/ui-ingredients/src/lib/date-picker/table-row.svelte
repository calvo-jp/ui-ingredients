<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface DatePickerTableRowProps extends HtmlProps<'tr'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableRowProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getTableRowProps(tableProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <tr {...attrs}>
    {@render children?.()}
  </tr>
{/if}
