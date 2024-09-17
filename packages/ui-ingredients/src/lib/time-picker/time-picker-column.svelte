<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ColumnProps} from '@zag-js/time-picker';

  export interface TimePickerColumnProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, ColumnProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    this: e,
    unit,
    asChild,
    children,
    ...props
  }: TimePickerColumnProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getColumnProps({unit})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
