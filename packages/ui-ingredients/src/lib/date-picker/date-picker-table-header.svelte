<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerTableHeaderProps
    extends HtmlIngredientProps<'th', HTMLTableCellElement> {}
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
  }: DatePickerTableHeaderProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();

  let mergedProps = $derived(
    mergeProps(datePicker.getTableHeaderProps(tableProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <th bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </th>
{/if}
