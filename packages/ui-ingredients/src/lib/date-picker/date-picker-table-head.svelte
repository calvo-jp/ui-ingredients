<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerTableHeadProps
    extends HtmlIngredientProps<'thead', HTMLTableSectionElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTablePropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerTableHeadProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getTableHeadProps(tableProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <thead bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </thead>
{/if}
