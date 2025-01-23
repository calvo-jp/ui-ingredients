<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PopoverIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverIndicatorProps = $props();

  let popover = getPopoverContext();
  let mergedProps = $derived(mergeProps(popover.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
