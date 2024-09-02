import {createContext} from '$lib/create-context.svelte.js';
import type {BranchProps, ItemProps} from '@zag-js/tree-view';
import type {CreateTreeViewReturn} from './create-tree-view.svelte.js';

export const [getTreeViewContext, setTreeViewContext] =
  createContext<CreateTreeViewReturn>('TreeView');

export const [getTreeViewItemPropsContext, setTreeViewItemPropsContext] =
  createContext<ItemProps>('TreeViewItem');

export const [getTreeViewBranchPropsContext, setTreeViewBranchPropsContext] =
  createContext<BranchProps>('TreeViewBranch');
