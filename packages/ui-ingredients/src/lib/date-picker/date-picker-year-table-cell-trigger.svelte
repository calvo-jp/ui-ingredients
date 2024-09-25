<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerYearTableCellTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTableCellPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerYearTableCellTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let tableCellProps = getDatePickerTableCellPropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getYearTableCellTriggerProps(tableCellProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
