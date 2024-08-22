import {getContext, hasContext, setContext} from 'svelte';

export interface CreateEnvironmentContextProps {
  getRootNode?: () => ShadowRoot | Document | Node;
  getDocument?: () => Document;
  getWindow?: () => Window & typeof globalThis;
}

export interface CreateEnvironmentContextReturn
  extends ReturnType<typeof createEnvironmentContext> {}

export function createEnvironmentContext(props: CreateEnvironmentContextProps) {
  return {
    getRootNode() {
      return props.getRootNode ? props.getRootNode() : document;
    },
    getDocument() {
      return props.getDocument ? props.getDocument() : document;
    },
    getWindow() {
      return props.getWindow ? props.getWindow() : window;
    },
  };
}

export function setEnvironmentContext(value: CreateEnvironmentContextReturn) {
  setContext('EnvironmentProvider', value);
}

export function useEnvironmentContext() {
  if (!hasContext('EnvironmentProvider')) {
    return null;
  } else {
    return getContext<CreateEnvironmentContextReturn>('EnvironmentProvider');
  }
}
