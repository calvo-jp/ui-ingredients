import type {GenericObject} from '$lib/types.js';
import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';

type GetContext<T extends GenericObject> = () => T;
type SetContext<T extends GenericObject> = (context: T | (() => T)) => T;
type HasContext = () => boolean;

export function createContext<T extends GenericObject>(
  key: string,
  strict = true,
): [
  getContext: GetContext<T>,
  setContext: SetContext<T>,
  hasContext: HasContext,
] {
  const has: HasContext = () => hasContext(key);

  const set: SetContext<T> = (context) => {
    return setContext<T>(
      key,
      typeof context === 'function' ? reflect(context) : context,
    );
  };

  const get: GetContext<T> = () => {
    if (strict && !has()) throw err(key);

    return getContext<T>(key);
  };

  return [get, set, has];
}

function err(k: string) {
  const e = new Error();

  e.name = 'ContextError';
  e.message = "No context found for '%s'".replace('%s', k);

  throw e;
}
