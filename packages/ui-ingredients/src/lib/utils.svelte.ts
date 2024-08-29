import {mergeProps as originalMergeProps, reflect} from '@zag-js/svelte';
import {createSplitProps as originalCreateSplitProps} from '@zag-js/utils';
import {getContext, hasContext, setContext} from 'svelte';
import {uid} from 'uid';
import type {GenericObject} from './types.js';

export function createUniqueId() {
  return uid(16);
}

function isObject<T extends GenericObject>(value: unknown): value is T {
  return Object.prototype.toString.call(value) === '[object Object]' && value === Object(value);
}

export function mergeProps<T extends GenericObject>(...args: T[]): T {
  const r = originalMergeProps<GenericObject>(...args);

  if (r.style && isObject(r.style)) {
    let s = '';

    for (const k in r.style) {
      s += `${k}:${r.style[k]};`;
    }

    r.style = s;
  }

  return r as T;
}

export function createSplitProps<T extends GenericObject>(k: (keyof T)[]) {
  return function <P extends T>(p: P): [T, Omit<P, keyof T>] {
    const r = $derived(originalCreateSplitProps(k)(p));
    return r;
  };
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
