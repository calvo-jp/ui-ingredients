<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {CellProps} from '@zag-js/time-picker';

  export interface TimePickerMinuteCellProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    this: e,
    value,
    asChild,
    children,
    ...props
  }: TimePickerMinuteCellProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getMinuteCellProps({value})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
