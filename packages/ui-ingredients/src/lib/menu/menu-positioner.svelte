<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPresenceContext} from '../presence/presence-context.svelte.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuPositionerProps = $props();

  let menu = getMenuContext();
  let presence = getPresenceContext();
  let mergedProps = $derived(
    mergeProps(
      menu?.getPositionerProps() ?? {},
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
