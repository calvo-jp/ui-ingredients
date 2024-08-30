<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface DatePickerNextTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    datePickerContext,
    datePickerViewPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: DatePickerNextTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let viewProps = datePickerViewPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getNextTriggerProps(viewProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
