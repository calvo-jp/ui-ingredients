<script lang="ts" module>
  import type {CellProps} from '@zag-js/time-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TimePickerHourCellProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: TimePickerHourCellProps = $props();

  let timePicker = getTimePickerContext();
  let mergedProps = $derived(
    mergeProps(timePicker.getHourCellProps({value}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
