<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TabsListProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTabsContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TabsListProps = $props();

  let tabs = getTabsContext();

  let mergedProps = $derived(mergeProps(props, tabs.getListProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
