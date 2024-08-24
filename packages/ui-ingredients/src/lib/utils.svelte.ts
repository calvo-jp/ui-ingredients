import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';
import {uid} from 'uid';

export const createUniqueId = () => uid();

function isObject<T extends Record<string, unknown>>(value: unknown): value is T {
  return Object.prototype.toString.call(value) === '[object Object]' && value === Object(value);
}

export function ensureStyleIsString<
  T extends {style?: null | string | Record<string, string | number>},
>(o: T) {
  const c = {...o};

  if (isObject<Record<string, any>>(c.style)) {
    let s = '';

    for (const k in c.style) {
      s += `${k}:${c.style[k]};`;
    }

    c.style = s;
  }

  return c as Omit<T, 'style'> & {style?: string | null};
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
