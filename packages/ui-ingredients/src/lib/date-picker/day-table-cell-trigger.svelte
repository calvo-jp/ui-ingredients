<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface DatePickerDayTableCellTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext, datePickerDayTableCellPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerDayTableCellTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let tableCellProps = datePickerDayTableCellPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getDayTableCellTriggerProps(tableCellProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
