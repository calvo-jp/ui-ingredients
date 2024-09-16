<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {PeriodCellProps} from '@zag-js/time-picker';

  export interface TimePickerPeriodCellProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement>,
      PeriodCellProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {
    this: e,
    value,
    asChild,
    children,
    ...props
  }: TimePickerPeriodCellProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      timePicker.getPeriodCellProps({
        value,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
