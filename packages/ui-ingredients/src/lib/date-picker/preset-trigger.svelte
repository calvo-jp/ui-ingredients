<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {PresetTriggerProps} from '@zag-js/date-picker';

  export interface DatePickerPresetTriggerProps
    extends Assign<HtmlIngredientProps<'button'>, PresetTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: DatePickerPresetTriggerProps =
    $props();

  let datePicker = getDatePickerContext();

  let mergedProps = $derived(
    mergeProps(props, datePicker.getPresetTriggerProps({value})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
