<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelPositionerProps = $props();

  let floatingPanel = getFloatingPanelContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(floatingPanel.getPositionerProps(), props),
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
