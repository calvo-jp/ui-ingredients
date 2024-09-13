<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelPositionerProps
    extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FloatingPanelPositionerProps = $props();

  let floatingPanel = getFloatingPanelContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      floatingPanel.getPositionerProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={e} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
