<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverContentProps = $props();

  let popover = getPopoverContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, popover.getContentProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
