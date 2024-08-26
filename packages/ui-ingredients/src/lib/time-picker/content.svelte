<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerContentProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
