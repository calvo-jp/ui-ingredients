import type {GenericObject} from '$lib/types.js';
import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';

type ContextGetter<T extends GenericObject> = () => T;
type ContextSetter<T extends GenericObject> = (context: T | (() => T)) => void;

export function createContext<T extends GenericObject>(
  key: string,
  strict = true,
): [getContext: ContextGetter<T>, setContext: ContextSetter<T>] {
  function g() {
    if (strict && !hasContext(key)) {
      const e = new Error();
      e.name = 'ContextError';
      e.message = `No context found for '${key}'`;
      throw e;
    }

    return getContext<T>(key);
  }

  function s(context: T | (() => T)) {
    const v = $derived.by(() => {
      if (typeof context === 'function') {
        return reflect(context);
      } else {
        return context;
      }
    });

    setContext(key, v);
  }

  return [g, s];
}
