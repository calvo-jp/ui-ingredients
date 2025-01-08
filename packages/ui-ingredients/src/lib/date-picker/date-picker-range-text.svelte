<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerRangeTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerRangeTextProps = $props();

  let datePicker = getDatePickerContext();
  let mergedProps = $derived(mergeProps(datePicker.getRangeTextProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {datePicker.visibleRangeText.start}
    {/if}
  </span>
{/if}
