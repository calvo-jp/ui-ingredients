import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';

export interface CreatePresenceProps extends presence.Context {}

export function createPresence(props: CreatePresenceProps) {
  const [state, send] = useMachine(presence.machine(props));

  const api = $derived(presence.connect(state, send, normalizeProps));

  function ref(node: HTMLElement) {
    api.setNode(node);
  }

  function getRootProps() {
    return {
      hidden: !api.present,
      'data-state': api.present ? 'open' : 'closed',
    };
  }

  return {
    ref,
    getRootProps,
  };
}
