import {Context} from '$lib/utils.svelte.js';

export interface Environment {
  getRootNode: () => ShadowRoot | Document | Node;
  getDocument: () => Document;
  getWindow: () => Window & typeof globalThis;
}

export const environmentContext = new Context<Environment>(
  'EnvironmentProvider',
  false,
);

export const getEnvironmentContext = (): Environment | null =>
  environmentContext.get();
