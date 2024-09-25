<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CollapsibleTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCollapsibleContext} from './collapsible-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: CollapsibleTriggerProps = $props();

  let collapsible = getCollapsibleContext();

  let mergedProps = $derived(mergeProps(props, collapsible.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
