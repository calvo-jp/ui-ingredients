<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TabsListProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTabsContext} from './tabs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TabsListProps = $props();

  let tabs = getTabsContext();

  let mergedProps = $derived(mergeProps(props, tabs.getListProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
