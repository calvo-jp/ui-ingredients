<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverPositionerProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(props, popover.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
