<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface PopoverContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getPopoverContext} from './popover-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PopoverContentProps = $props();

  let popover = getPopoverContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, popover.getContentProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
