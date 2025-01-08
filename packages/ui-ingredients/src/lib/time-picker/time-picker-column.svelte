<script lang="ts" module>
  import type {ColumnProps} from '@zag-js/time-picker';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TimePickerColumnProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ColumnProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    unit,
    asChild,
    children,
    ...props
  }: TimePickerColumnProps = $props();

  let timePicker = getTimePickerContext();
  let mergedProps = $derived(
    mergeProps(timePicker.getColumnProps({unit}), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
