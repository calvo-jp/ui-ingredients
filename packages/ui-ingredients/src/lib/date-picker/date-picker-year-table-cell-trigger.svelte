<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerYearTableCellTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTableCellPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerYearTableCellTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let tableCellProps = getDatePickerTableCellPropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getYearTableCellTriggerProps(tableCellProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
