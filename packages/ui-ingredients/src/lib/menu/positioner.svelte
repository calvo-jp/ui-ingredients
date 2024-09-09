<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getMenuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuPositionerProps = $props();

  let menu = getMenuContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, menu.getPositionerProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
