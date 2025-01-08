<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PopoverCloseTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverCloseTriggerProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(popover.getCloseTriggerProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
