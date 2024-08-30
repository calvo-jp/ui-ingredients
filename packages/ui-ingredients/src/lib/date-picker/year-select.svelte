<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerYearSelectProps extends HTMLProps<'select'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerYearSelectProps = $props();

  let datePicker = datePickerContext.get();

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
  <select {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each getYears() as year}
        <option value={year}>{year}</option>
      {/each}
    {/if}
  </select>
{/if}
