<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerDayTableCellTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerDayTableCellPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerDayTableCellTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let tableCellProps = getDatePickerDayTableCellPropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getDayTableCellTriggerProps(tableCellProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
