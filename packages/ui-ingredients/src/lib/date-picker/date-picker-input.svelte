<script lang="ts" module>
  import type {InputProps} from '@zag-js/date-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface DatePickerInputProps
    extends Assign<
      HtmlIngredientProps<'input', HTMLInputElement>,
      InputProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    ...props
  }: DatePickerInputProps = $props();

  let datePicker = getDatePickerContext();
  let mergedProps = $derived(
    mergeProps(datePicker.getInputProps({index}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
