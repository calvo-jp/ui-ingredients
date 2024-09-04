<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverDescriptionProps extends HtmlIngredientProps<'p'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverDescriptionProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(props, popover.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
