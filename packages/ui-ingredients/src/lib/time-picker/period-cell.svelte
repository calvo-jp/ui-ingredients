<script lang="ts" module>
  import type {Snippet} from 'svelte';

  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {PeriodCellProps} from '@zag-js/time-picker';

  export interface TimePickerPeriodCellProps extends Assign<HtmlProps<'div'>, PeriodCellProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: TimePickerPeriodCellProps = $props();

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

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
