<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface HoverCardContentProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getHoverCardContext} from './context.svelte.js';

  let {asChild, children, ...props}: HoverCardContentProps = $props();

  let hoverCard = getHoverCardContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, hoverCard.getContentProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
