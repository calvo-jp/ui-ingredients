<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface HoverCardContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getHoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardContentProps = $props();

  let hoverCard = getHoverCardContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, hoverCard.getContentProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
