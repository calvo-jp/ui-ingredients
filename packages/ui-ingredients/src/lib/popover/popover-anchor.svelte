<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PopoverAnchorProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverAnchorProps = $props();

  let popover = getPopoverContext();
  let mergedProps = $derived(mergeProps(popover.getAnchorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
