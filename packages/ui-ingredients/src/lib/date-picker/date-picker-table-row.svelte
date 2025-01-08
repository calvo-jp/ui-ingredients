<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerTableRowProps
    extends HtmlIngredientProps<'tr', HTMLTableRowElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getDatePickerContext,
    getDatePickerTablePropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerTableRowProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getTableRowProps(tableProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tr bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </tr>
{/if}
