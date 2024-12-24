import type {NodeProps} from '@zag-js/tree-view';
import {createContext} from '../create-context.svelte.js';
import type {CreateTreeViewReturn} from './create-tree-view.svelte.js';

export const [getTreeViewContext, setTreeViewContext] =
  createContext<CreateTreeViewReturn>('TreeView');

export const [getTreeViewNodePropsContext, setTreeViewNodePropsContext] =
  createContext<NodeProps>('TreeViewNodeProps');
