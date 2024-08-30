<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTreeViewProps,
    CreateTreeViewReturn,
  } from './create-tree-view.svelte.js';

  export interface TreeViewProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateTreeViewProps> {
    asChild?: AsChild<CreateTreeViewReturn>;
    children?: Snippet<[CreateTreeViewReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {treeViewContext} from './context.svelte.js';
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

  let treeView = createTreeView(treeViewProps);

  let mergedProps = $derived(mergeProps(otherProps, treeView.getRootProps()));

  treeViewContext.set(treeView);
</script>

{#if asChild}
  {@render asChild(mergedProps, treeView)}
{:else}
  <div {...mergedProps}>
    {@render children?.(treeView)}
  </div>
{/if}
