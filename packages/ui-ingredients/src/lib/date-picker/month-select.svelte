<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerMonthSelectProps extends HTMLProps<'select'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerMonthSelectProps = $props();

  let datePicker = datePickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getMonthSelectProps()),
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each months as month, index}
        <option value={index}>{month}</option>
      {/each}
    {/if}
  </select>
{/if}
