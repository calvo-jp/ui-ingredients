<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CollapsibleTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCollapsibleContext} from './context.svelte.js';

  let {asChild, children, ...props}: CollapsibleTriggerProps = $props();

  let collapsible = getCollapsibleContext();

  let mergedProps = $derived(mergeProps(props, collapsible.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
