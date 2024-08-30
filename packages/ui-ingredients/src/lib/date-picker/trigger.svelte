<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {datePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerTriggerProps = $props();

  let datePicker = datePickerContext.get();

  let mergedProps = $derived(mergeProps(props, datePicker.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
