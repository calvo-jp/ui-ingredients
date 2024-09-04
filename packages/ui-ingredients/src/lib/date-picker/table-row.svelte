<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerTableRowProps extends HtmlIngredientProps<'tr'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTablePropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableRowProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableRowProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <tr {...mergedProps}>
    {@render children?.()}
  </tr>
{/if}
