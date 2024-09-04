<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getHoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardContentProps = $props();

  let hoverCard = getHoverCardContext();

  let mergedProps = $derived(mergeProps(props, hoverCard.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
