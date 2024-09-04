<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PopoverTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPopoverContext} from './context.svelte.js';

  let {asChild, children, ...props}: PopoverTriggerProps = $props();

  let popover = getPopoverContext();

  let mergedProps = $derived(mergeProps(props, popover.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
