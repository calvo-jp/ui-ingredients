<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerViewTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getDatePickerContext,
    getDatePickerViewPropsContext,
  } from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerViewTriggerProps = $props();

  let datePicker = getDatePickerContext();
  let viewProps = getDatePickerViewPropsContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getViewTriggerProps(viewProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
