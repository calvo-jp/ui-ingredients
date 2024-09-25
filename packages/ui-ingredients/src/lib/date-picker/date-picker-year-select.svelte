<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerYearSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: DatePickerYearSelectProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getYearSelectProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each datePicker.getYears() as item}
        <option value={item.value}>{item.label}</option>
      {/each}
    {/if}
  </select>
{/if}
