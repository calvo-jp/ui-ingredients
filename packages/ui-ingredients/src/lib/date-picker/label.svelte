<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {LabelProps} from '@zag-js/date-picker';

  export interface DatePickerLabelProps extends Assign<HtmlProps<'label'>, LabelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {index, children, ...props}: DatePickerLabelProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getLabelProps({index})));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
