<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {CellProps} from '@zag-js/time-picker';

  export interface TimePickerSecondCellProps
    extends Assign<HtmlIngredientProps<'div'>, CellProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: TimePickerSecondCellProps =
    $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(
    mergeProps(props, timePicker.getSecondCellProps({value})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
