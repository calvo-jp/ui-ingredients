<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerYearSelectProps
    extends HtmlIngredientProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

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

  function getYears() {
    const currentYear = new Date().getFullYear();

    const start = currentYear - 1000;
    const until = currentYear + 1000;

    const years = [];

    for (let i = start; i <= until; i++) {
      years.unshift(i);
    }

    return years;
  }
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each getYears() as year}
        <option value={year}>{year}</option>
      {/each}
    {/if}
  </select>
{/if}
