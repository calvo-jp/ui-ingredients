<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ColumnProps} from '@zag-js/time-picker';

  export interface TimePickerColumnProps
    extends Assign<HTMLProps<'div'>, ColumnProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {timePickerContext} from './context.svelte.js';

  let {unit, asChild, children, ...props}: TimePickerColumnProps = $props();

  let timePicker = timePickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getColumnProps({unit})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
