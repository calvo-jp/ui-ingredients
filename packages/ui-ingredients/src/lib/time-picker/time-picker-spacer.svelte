<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimePickerSpacerProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimePickerSpacerProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(mergeProps(timePicker.getSpacerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
