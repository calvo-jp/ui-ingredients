<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface DatePickerMonthSelectProps extends HtmlProps<'select'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'select'>, 'children'>]>;
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
