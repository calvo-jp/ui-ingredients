<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface DatePickerRangeTextProps extends HtmlProps<'span'> {
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
