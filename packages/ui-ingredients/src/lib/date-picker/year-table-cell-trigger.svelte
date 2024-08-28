<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface DatePickerYearTableCellTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerTableCellPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerYearTableCellTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerTableCellPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getYearTableCellTriggerProps(tableCellProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
