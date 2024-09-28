<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CollapsibleContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCollapsibleContext} from './collapsible-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: CollapsibleContentProps = $props();

  let collapsible = getCollapsibleContext();

  let mergedProps = $derived(mergeProps(props, collapsible.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
