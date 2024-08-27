import {mergeProps as originalMergeProps, reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';
import {uid} from 'uid';

export const createUniqueId = () => uid();

export function isObject<T extends Record<string, unknown>>(value: unknown): value is T {
  return Object.prototype.toString.call(value) === '[object Object]' && value === Object(value);
}

export function mergeProps<T extends Record<string, any>>(...args: T[]): T {
  const r = originalMergeProps<Record<string, any>>(...args);

  if (r.style && isObject<Record<string, any>>(r.style)) {
    let s = '';

    for (const k in r.style) {
      s += `${k}:${r.style[k]};`;
    }

    r.style = s;
  }

  return r as T;
}

export class Context<T extends Record<string, any>> {
  constructor(
    private key: string,
    private strict = true,
  ) {}

  get() {
    if (this.strict && !hasContext(this.key)) {
      const e = new Error();
      e.name = 'ContextError';
      e.message = `No context found for '${this.key}'`;
      throw e;
    }

    return getContext<T>(this.key);
  }

  set(context: T | (() => T)) {
    const v = $derived.by(() => {
      if (typeof context === 'function') {
        return reflect(context);
      } else {
        return context;
      }
    });

    return setContext(this.key, v);
  }
}
