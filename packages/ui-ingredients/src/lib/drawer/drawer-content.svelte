<script lang="ts" module>
  import type {Action} from 'svelte/action';
  import type {HtmlIngredientProps} from '../types.js';

  export interface DrawerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getDrawerContext} from './drawer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DrawerContentProps = $props();

  let drawer = getDrawerContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(drawer.getContentProps(), presence.getPresenceProps(), props),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
