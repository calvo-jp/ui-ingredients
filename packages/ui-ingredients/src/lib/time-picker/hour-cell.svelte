<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {CellProps} from '@zag-js/time-picker';

  export interface TimePickerHourCellProps extends Assign<HtmlProps<'div'>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {value, children, ...props}: TimePickerHourCellProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getHourCellProps({value})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
