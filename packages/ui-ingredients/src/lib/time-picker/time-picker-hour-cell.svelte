<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {CellProps} from '@zag-js/time-picker';

  export interface TimePickerHourCellProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
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
    mergeProps(props, timePicker.getHourCellProps({value})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
