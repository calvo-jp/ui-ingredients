<script lang="ts" module>
  import type {NodeProps} from '@zag-js/tree-view';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface TreeViewItemProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, NodeProps> {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {
    getTreeViewContext,
    setTreeViewNodePropsContext,
  } from './tree-view-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TreeViewItemProps = $props();

  let [nodeProps, localProps] = $derived(
    createSplitProps<NodeProps>(['node', 'indexPath'])(props),
  );

  let treeView = getTreeViewContext();
  let mergedProps = $derived(
    mergeProps(treeView.getItemProps(nodeProps), localProps),
  );

  setTreeViewNodePropsContext(() => nodeProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
