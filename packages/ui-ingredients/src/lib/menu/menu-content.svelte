<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface MenuContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuContentProps = $props();

  let menu = getMenuContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, menu.getContentProps(), presence.getPresenceProps()),
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
