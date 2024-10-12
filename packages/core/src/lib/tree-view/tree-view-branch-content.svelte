<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface TreeViewBranchContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {
    getTreeViewBranchPropsContext,
    getTreeViewContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewBranchContentProps = $props();

  let treeView = getTreeViewContext();

  let branchProps = getTreeViewBranchPropsContext();
  let branchState = $derived(treeView.getBranchState(branchProps));

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      present: branchState.expanded,
      ...presenceStrategyProps,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      treeView.getBranchContentProps(branchProps),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
