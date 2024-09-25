<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {this: e, asChild, children, ...props}: MenuPositionerProps = $props();

  let menu = getMenuContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, menu.getPositionerProps(), presence.getPresenceProps()),
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
