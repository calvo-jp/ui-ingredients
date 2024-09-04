<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateTreeViewProps,
    CreateTreeViewReturn,
  } from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<
      HtmlIngredientProps<'div', CreateTreeViewReturn>,
      CreateTreeViewProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTreeViewContext} from './context.svelte.js';
  import {createTreeView} from './create-tree-view.svelte.js';

  let {asChild, children, ...props}: TreeViewProps = $props();

  let [treeViewProps, otherProps] = $derived(
    createSplitProps<CreateTreeViewProps>([
      'id',
      'ids',
      'typeahead',
      'focusedValue',
      'expandedValue',
      'expandOnClick',
      'selectedValue',
      'selectionMode',
      'onFocusChange',
      'onExpandedChange',
      'onSelectionChange',
    ])(props),
  );

  let treeView = createTreeView(reflect(() => treeViewProps));

  let mergedProps = $derived(mergeProps(otherProps, treeView.getRootProps()));

  setTreeViewContext(treeView);
</script>

{#if asChild}
  {@render asChild(mergedProps, treeView)}
{:else}
  <div {...mergedProps}>
    {@render children?.(treeView)}
  </div>
{/if}
