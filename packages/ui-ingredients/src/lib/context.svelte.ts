import {reflect} from '@zag-js/svelte';
import {getContext, hasContext, setContext} from 'svelte';
import type {GenericObject} from './types.js';

export class Context<T extends GenericObject> {
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
