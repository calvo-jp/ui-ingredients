<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerControlProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
