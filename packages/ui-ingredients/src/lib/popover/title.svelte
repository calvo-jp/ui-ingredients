<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverTitleProps extends HtmlIngredientProps<'h2'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverTitleProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(props, popover.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
