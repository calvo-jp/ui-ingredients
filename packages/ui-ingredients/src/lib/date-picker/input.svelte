<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/date-picker';

  export interface DatePickerInputProps
    extends Assign<HTMLProps<'input'>, InputProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {datePickerContext} from './context.svelte.js';

  let {index, asChild, ...props}: DatePickerInputProps = $props();

  let datePicker = datePickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getInputProps({index})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
