<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverDescriptionProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(popover.getDescriptionProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
