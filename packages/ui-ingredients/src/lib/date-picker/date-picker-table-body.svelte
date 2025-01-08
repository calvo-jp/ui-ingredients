<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerTableBodyProps
    extends HtmlIngredientProps<'tbody', HTMLTableSectionElement> {}
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
  }: DatePickerTableBodyProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getTableBodyProps(tableProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tbody bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </tbody>
{/if}
