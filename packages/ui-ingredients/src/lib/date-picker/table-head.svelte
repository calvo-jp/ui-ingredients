<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerTableHeadProps
    extends HtmlIngredientProps<'thead'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getDatePickerContext,
    getDatePickerTablePropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTableHeadProps = $props();

  let datePicker = getDatePickerContext();
  let tableProps = getDatePickerTablePropsContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getTableHeadProps(tableProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <thead {...mergedProps}>
    {@render children?.()}
  </thead>
{/if}
