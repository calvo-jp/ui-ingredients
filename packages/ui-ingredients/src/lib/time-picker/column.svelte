<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ColumnProps} from '@zag-js/time-picker';

  export interface TimePickerColumnProps extends Assign<HtmlProps<'div'>, ColumnProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {unit, children, ...props}: TimePickerColumnProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getColumnProps({unit})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
