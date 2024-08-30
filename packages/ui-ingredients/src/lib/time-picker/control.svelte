<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimePickerControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerControlProps = $props();

  let timePicker = timePickerContext.get();

  let mergedProps = $derived(mergeProps(props, timePicker.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
