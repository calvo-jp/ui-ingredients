<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {PresetTriggerProps} from '@zag-js/date-picker';

  export interface DatePickerPresetTriggerProps
    extends Assign<HtmlProps<'button'>, PresetTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {value, children, ...props}: DatePickerPresetTriggerProps = $props();

  let context = datePickerContext.get();

  let attrs = $derived(mergeProps(props, context.getPresetTriggerProps({value})));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
