<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DatePickerPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {datePickerContext} from './context.svelte.js';

  let {children, ...props}: DatePickerPositionerProps = $props();

  let datePicker = datePickerContext.get();

  let attrs = $derived(mergeProps(props, datePicker.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
