<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface HoverCardPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getHoverCardContext} from './hover-card-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: HoverCardPositionerProps = $props();

  let hoverCard = getHoverCardContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(
      hoverCard.getPositionerProps(),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
