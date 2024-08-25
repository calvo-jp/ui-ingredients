<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerViewControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext, datePickerViewPropsContext} from './context.svelte.js';

  let {children, ...props}: DatePickerViewControlProps = $props();

  let datePicker = datePickerContext.get();
  let viewProps = datePickerViewPropsContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getViewControlProps(viewProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
