<script lang="ts" module>
  import type {Snippet} from 'svelte';

  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {PresetTriggerProps} from '@zag-js/date-picker';

  export interface DatePickerPresetTriggerProps
    extends Assign<HtmlProps<'button'>, PresetTriggerProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {datePickerContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: DatePickerPresetTriggerProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getPresetTriggerProps({value})));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
