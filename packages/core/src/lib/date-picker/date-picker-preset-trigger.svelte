<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {PresetTriggerProps} from '@zag-js/date-picker';

  export interface DatePickerPresetTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      PresetTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './date-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: DatePickerPresetTriggerProps = $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(datePicker.getPresetTriggerProps({value}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
