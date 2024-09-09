import {browser} from '$app/environment';
import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {HTMLAttributes} from 'svelte/elements';
import {uid} from 'uid';

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

  function getRootProps(): HTMLAttributes<HTMLElement> {
    const id = uid();

    setTimeout(() => {
      if (!browser) return;
      const attr = '[data-id="%s"]'.replace('%s', id);
      const node = document.querySelector<HTMLElement>(attr);
      api.setNode(node);
    }, 5);

    return {
      hidden: !api.present,
      'data-id': id,
      'data-state': context.present ? 'open' : 'closed',
    };
  }

  return {
    getRootProps,
  };
}
