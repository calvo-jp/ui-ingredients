<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimePickerSpacerProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerSpacerProps = $props();

  let timePicker = timePickerContext.get();

  let mergedProps = $derived(mergeProps(props, timePicker.getSpacerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
