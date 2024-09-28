import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';

type HasContext = () => boolean;
type SetContext<T> = (context: T | (() => T)) => void;
type GetContext<T, Strict extends boolean> = () => [Strict] extends [true]
  ? T
  : T | undefined;

type CreateContextReturn<T, Strict extends boolean> = [
  getContext: GetContext<T, Strict>,
  setContext: SetContext<T>,
  hasContext: HasContext,
];

export function createContext<T>(key: string): CreateContextReturn<T, true>;
export function createContext<T>(
  key: string,
  strict: true,
): CreateContextReturn<T, true>;
export function createContext<T>(
  key: string,
  strict: false,
): CreateContextReturn<T, false>;
export function createContext(key: string, strict = true) {
  function has() {
    return hasContext(key);
  }

  function set(context: any) {
    setContext(key, typeof context === 'function' ? reflect(context) : context);
  }

  function get() {
    if (strict && !has()) throw err(key);
    return getContext(key);
  }

  return [get, set, has];
}

function err(k: string) {
  const e = new Error();
  e.name = 'ContextError';
  e.message = "No context found for '%s'".replace('%s', k);
  throw e;
}
