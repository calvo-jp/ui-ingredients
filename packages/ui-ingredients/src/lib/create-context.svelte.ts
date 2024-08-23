import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';

type Setter<T extends Record<string, any>> = (value: () => T) => T;
type Getter<T extends Record<string, any>> = () => T;

export function createContext<T extends Record<string, any>>(
  key: string,
  strict = true,
): [Setter<T>, Getter<T>] {
  const s: Setter<T> = (value) => {
    const v = $derived(reflect(value));
    setContext(key, v);
    return v;
  };

  const g: Getter<T> = () => {
    if (strict && !hasContext(key)) {
      const e = new Error();
      e.name = 'ContextError';
      e.message = `No context found for '${key}'`;
      throw e;
    }

    return getContext<T>(key);
  };

  return [s, g] as const;
}
