<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimePickerTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerTriggerProps = $props();

  let timePicker = timePickerContext.get();

  let mergedProps = $derived(mergeProps(props, timePicker.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
