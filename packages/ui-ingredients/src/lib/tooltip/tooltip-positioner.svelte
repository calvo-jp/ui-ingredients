<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TooltipPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getTooltipContext} from './tooltip-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TooltipPositionerProps = $props();

  let tooltip = getTooltipContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      tooltip.getPositionerProps(),
      presence.getPresenceProps(),
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
