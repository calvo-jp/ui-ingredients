<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TimePickerPositionerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {asChild, children, ...props}: TimePickerPositionerProps = $props();

  let timePicker = timePickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getPositionerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
