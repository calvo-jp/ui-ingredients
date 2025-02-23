import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as treeView from '@zag-js/tree-view';
import {createUniqueId} from '../create-unique-id.js';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';

export interface CreateTreeViewProps
  extends Omit<treeView.Props, 'id' | 'dir' | 'getRootNode'> {
  id?: string;
}

export interface CreateTreeViewReturn extends treeView.Api {}

export function createTreeView(
  props: CreateTreeViewProps,
): CreateTreeViewReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const id = createUniqueId();

  const context: treeView.Props = reflect(() => ({
    id,
    dir: locale?.dir,
    getRootNode: environment?.getRootNode,
    ...props,
  }));

  const service = useMachine(treeView.machine, context);

  return reflect(() => treeView.connect(service, normalizeProps));
}
