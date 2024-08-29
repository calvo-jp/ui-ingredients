<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface DatePickerTableHeaderProps extends HtmlProps<'th'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTablePropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableHeaderProps = $props();

  let datePicker = datePickerContext.get();
  let tableProps = datePickerTablePropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getTableHeaderProps(tableProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <th {...attrs}>
    {@render children?.()}
  </th>
{/if}
