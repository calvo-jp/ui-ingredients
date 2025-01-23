<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DatePickerYearSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DatePickerYearSelectProps = $props();

  let datePicker = getDatePickerContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getYearSelectProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each datePicker.getYears() as item}
        <option value={item.value}>{item.label}</option>
      {/each}
    {/if}
  </select>
{/if}
