<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TimePickerLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {children, ...props}: TimePickerLabelProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
