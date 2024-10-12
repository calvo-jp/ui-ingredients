import {createContext} from '$lib/create-context.svelte.js';

export interface Environment {
  getRootNode(): ShadowRoot | Document | Node;
  getDocument(): Document;
  getWindow(): Window & typeof globalThis;
}

export const [getEnvironmentContext, setEnvironmentContext] =
  createContext<Environment>('EnvironmentProvider', false);
