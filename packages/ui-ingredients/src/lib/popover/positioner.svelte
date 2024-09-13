<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getPopoverContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: PopoverPositionerProps = $props();

  let popover = getPopoverContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      popover.getPositionerProps(),
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
