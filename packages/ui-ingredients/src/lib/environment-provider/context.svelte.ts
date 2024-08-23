import {getContext, hasContext, setContext} from 'svelte';

export interface CreateEnvironmentContextProps {
  getRootNode?: () => ShadowRoot | Document | Node;
  getDocument?: () => Document;
  getWindow?: () => Window & typeof globalThis;
}

export interface CreateEnvironmentContextReturn
  extends ReturnType<typeof createEnvironmentContext> {}

export function createEnvironmentContext(props: CreateEnvironmentContextProps) {
  const getRootNode = $derived(props.getRootNode ?? (() => document));
  const getDocument = $derived(props.getDocument ?? (() => document));
  const getWindow = $derived(props.getWindow ?? (() => window));

  return {
    getRootNode,
    getDocument,
    getWindow,
  };
}

export function setEnvironmentContext(value: CreateEnvironmentContextReturn) {
  setContext('EnvironmentProvider', value);
}

export function getEnvironmentContext() {
  if (!hasContext('EnvironmentProvider')) {
    return null;
  } else {
    return getContext<CreateEnvironmentContextReturn>('EnvironmentProvider');
  }
}
