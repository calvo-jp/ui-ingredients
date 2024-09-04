<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerYearTableCellTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTableCellPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerYearTableCellTriggerProps =
    $props();

  let datePicker = getDatePickerContext();
  let tableCellProps = getDatePickerTableCellPropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getYearTableCellTriggerProps(tableCellProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
