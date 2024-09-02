import * as presence from '@zag-js/presence';
import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';

export interface CreatePresenceProps {
  present?: boolean;
  keepMounted?: boolean;
}

export interface CreatePresenceReturn
  extends ReturnType<typeof createPresence> {}

export function createPresence(props: CreatePresenceProps) {
  const context = $derived(
    reflect(() => ({
      present: props.present,
      immediate: false,
    })),
  );

  const [state, send] = useMachine(presence.machine(context), {context});

  const api = $derived(presence.connect(state, send, normalizeProps));

  function ref(node: HTMLElement) {
    function update(elem: HTMLElement) {
      api.setNode(elem);
    }

    update(node);

    return {
      update,
      destroy() {
        api.setNode(null);
      },
    };
  }

  const unmounted = $derived(!api.present && !props.keepMounted);

  function getRootProps() {
    return {
      hidden: !api.present,
      'data-state': api.skip ? undefined : api.present ? 'open' : 'closed',
    };
  }

  return {
    ref,
    getRootProps,
    get unmounted() {
      return unmounted;
    },
  };
}
