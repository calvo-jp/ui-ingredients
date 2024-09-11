<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface FloatingPanelContentProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {asChild, children, ...props}: FloatingPanelContentProps = $props();

  let floatingPanel = getFloatingPanelContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      floatingPanel.getContentProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if asChild}
  {@render asChild(presence.ref, mergedProps)}
{:else}
  <div use:presence.ref {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
