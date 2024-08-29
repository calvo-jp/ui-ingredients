<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface DatePickerMonthSelectProps extends HtmlProps<'select'> {
    asChild?: AsChild<HtmlProps<'select'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerMonthSelectProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getMonthSelectProps()));

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
  {@render asChild(attrs)}
{:else}
  <select {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {#each months as month, index}
        <option value={index}>{month}</option>
      {/each}
    {/if}
  </select>
{/if}
