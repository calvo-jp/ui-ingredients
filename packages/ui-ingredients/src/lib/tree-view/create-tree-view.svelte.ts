import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import {getLocaleContext} from '$lib/locale-provider/context.svelte.js';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
import * as treeView from '@zag-js/tree-view';
import {uid} from 'uid';

export interface CreateTreeViewProps
  extends Omit<treeView.Context, 'id' | 'dir' | 'getRootNode'> {
  id?: string | null;
}

export interface CreateTreeViewReturn extends treeView.Api {}

export function createTreeView(props: CreateTreeViewProps) {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const [state, send] = useMachine(
    treeView.machine({
      ...props,
      id: props.id ?? uid(),
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    }),
  );

  const api = $derived(
    reflect(() => treeView.connect(state, send, normalizeProps)),
  );

  return api;
}
