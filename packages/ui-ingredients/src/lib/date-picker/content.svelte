<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerContentProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerContentProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getContentProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
