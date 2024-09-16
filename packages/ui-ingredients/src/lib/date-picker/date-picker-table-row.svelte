<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerTableRowProps
    extends HtmlIngredientProps<'tr', HTMLTableRowElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTablePropsContext,
  } from './date-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerTableRowProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableRowProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tr bind:this={e} {...mergedProps}>
    {@render children?.()}
  </tr>
{/if}
