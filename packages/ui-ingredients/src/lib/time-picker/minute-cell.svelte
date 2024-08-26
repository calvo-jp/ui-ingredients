<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {CellProps} from '@zag-js/time-picker';

  export interface TimePickerMinuteCellProps extends Assign<HtmlProps<'div'>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {value, children, ...props}: TimePickerMinuteCellProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(mergeProps(props, timePicker.getMinuteCellProps({value})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
