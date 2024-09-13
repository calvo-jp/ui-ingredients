<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DatePickerMonthSelectProps
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
  }: DatePickerMonthSelectProps = $props();

  let datePicker = getDatePickerContext();

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
  <select bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {#each months as month, index}
        <option value={index}>{month}</option>
      {/each}
    {/if}
  </select>
{/if}
