<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerTableHeaderProps
    extends HtmlIngredientProps<'th', HTMLTableCellElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
    mergeProps(props, datePicker.getTableHeaderProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <th bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </th>
{/if}
