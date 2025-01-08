<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerTriggerProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(mergeProps(datePicker.getTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
