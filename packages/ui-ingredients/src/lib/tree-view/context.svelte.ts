import {Context} from '$lib/utils.svelte.js';
import type {BranchProps, ItemProps} from '@zag-js/tree-view';
import type {CreateTreeViewReturn} from './create-tree-view.svelte.js';

export const treeViewContext = new Context<CreateTreeViewReturn>('TreeView');
export const treeViewItemPropsContext = new Context<ItemProps>('TreeViewItem');
export const treeViewBranchPropsContext = new Context<BranchProps>(
  'TreeViewBranch',
);
