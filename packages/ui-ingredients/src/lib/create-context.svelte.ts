import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';
import type {GenericObject} from './types.js';

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

export function createContext<T extends GenericObject>(
  key: string,
  strict: true,
): CreateContextReturn<T, true>;
export function createContext<T extends GenericObject>(
  key: string,
  strict: false,
): CreateContextReturn<T, false>;
export function createContext<T extends GenericObject>(
  key: string,
): CreateContextReturn<T, true>;
export function createContext<T extends GenericObject>(
  ...args: [string, boolean?]
): CreateContextReturn<T, boolean> {
  const k = args[0];
  const s = args[1] ?? true;

  if (k.trim().length < 1) {
    const e = new Error();
    e.name = 'ContextError';
    e.message = 'Context key cannot be empty';
    throw e;
  }

  function has() {
    return hasContext(k);
  }

  function set(v: T | (() => T)) {
    setContext(k, isFn<T>(v) ? reflect(v) : v);
  }

  function get() {
    if (s && !has()) {
      const e = new Error();
      e.name = 'ContextError';
      e.message = "No context found for '%s'".replace('%s', k);
      throw e;
    }

    return getContext<T>(k);
  }

  return [get, set, has];
}

function isFn<Return, Arg = never>(
  v: unknown,
): v is (...args: Arg[]) => Return {
  return typeof v === 'function';
}
