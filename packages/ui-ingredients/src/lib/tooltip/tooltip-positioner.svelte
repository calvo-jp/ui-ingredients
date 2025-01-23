<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TooltipPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
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
      tooltip.getPositionerProps(),
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
