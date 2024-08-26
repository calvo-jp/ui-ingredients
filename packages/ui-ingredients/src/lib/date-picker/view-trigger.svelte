<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerViewTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerViewPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerViewTriggerProps = $props();

  let datePicker = datePickerContext.get();
  let viewProps = datePickerViewPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getViewTriggerProps(viewProps)));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
