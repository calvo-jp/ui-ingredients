import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import {tick} from 'svelte';
import type {HTMLAttributes} from 'svelte/elements';

export interface CreatePresenceProps {
  present?: boolean;
}

export interface CreatePresenceReturn
  extends ReturnType<typeof createPresence> {}

export function createPresence(props: CreatePresenceProps) {
  const context = $derived({
    get present() {
      return props.present;
    },
  });

  const [state, send] = useMachine(presence.machine(context), {context});

  const api = $derived(presence.connect(state, send, normalizeProps));

  function getPresenceProps(): HTMLAttributes<HTMLElement> {
    return {
      hidden: !api.present,
      'data-state': context.present ? 'open' : 'closed',
    };
  }

  function ref(node: HTMLElement) {
    tick().then(() => {
      api.setNode(node);
    });
  }

  return {
    ref,
    getPresenceProps,
  };
}
