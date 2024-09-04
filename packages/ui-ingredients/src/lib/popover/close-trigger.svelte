<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverCloseTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverCloseTriggerProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(props, popover.getCloseTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
