<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {LabelProps} from '@zag-js/date-picker';

  export interface DatePickerLabelProps extends Assign<HTMLProps<'label'>, LabelProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {index, asChild, children, ...props}: DatePickerLabelProps = $props();

  let datePicker = datePickerContext.get();

  let mergedProps = $derived(mergeProps(props, datePicker.getLabelProps({index})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
