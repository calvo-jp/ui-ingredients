<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerDayTableCellTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerDayTableCellPropsContext,
  } from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerDayTableCellTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let tableCellProps = getDatePickerDayTableCellPropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getDayTableCellTriggerProps(tableCellProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
