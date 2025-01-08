<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PopoverArrowTipProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverArrowTipProps = $props();

  let popover = getPopoverContext();
  let mergedProps = $derived(mergeProps(popover.getArrowTipProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
