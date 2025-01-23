<script lang="ts" module>
  import type {CellProps} from '@zag-js/time-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TimePickerSecondCellProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    value,
    asChild,
    children,
    ...props
  }: TimePickerSecondCellProps = $props();

  let timePicker = getTimePickerContext();
  let mergedProps = $derived(
    mergeProps(timePicker.getSecondCellProps({value}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
