<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerMonthSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {
    format?: 'short' | 'long';
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    format = 'short',
    asChild,
    children,
    ...props
  }: DatePickerMonthSelectProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(datePicker.getMonthSelectProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each datePicker.getMonths({format}) as item}
        <option value={item.value}>{item.label}</option>
      {/each}
    {/if}
  </select>
{/if}
