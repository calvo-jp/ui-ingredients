<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerRangeTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerRangeTextProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getRangeTextProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {datePicker.visibleRangeText.formatted}
    {/if}
  </span>
{/if}
