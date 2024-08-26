<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {PeriodCellProps} from '@zag-js/time-picker';

  export interface TimePickerPeriodCellProps extends Assign<HtmlProps<'div'>, PeriodCellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {timePickerContext} from './context.svelte.js';

  let {value, children, ...props}: TimePickerPeriodCellProps = $props();

  let timePicker = timePickerContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      timePicker.getPeriodCellProps({
        value,
      }),
    ),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
