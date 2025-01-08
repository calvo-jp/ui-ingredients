<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TimePickerClearTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getTimePickerContext} from './time-picker-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TimePickerClearTriggerProps = $props();

  let timePicker = getTimePickerContext();
  let mergedProps = $derived(
    mergeProps(timePicker.getClearTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
