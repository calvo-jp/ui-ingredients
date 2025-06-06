import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as treeView from '@zag-js/tree-view';
import {getEnvironmentContext} from '../environment-provider/environment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/locale-provider-context.svelte.js';

export interface CreateTreeViewProps
  extends Omit<treeView.Props, 'dir' | 'getRootNode'> {}

export interface CreateTreeViewReturn extends treeView.Api {}

export function createTreeView(
  props: CreateTreeViewProps,
): CreateTreeViewReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const service = useMachine(treeView.machine, () => ({
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  return reflect(() => treeView.connect(service, normalizeProps));
}
