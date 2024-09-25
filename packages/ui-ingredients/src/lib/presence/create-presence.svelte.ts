import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Action} from 'svelte/action';
import type {HTMLAttributes} from 'svelte/elements';

export interface PresenceStrategyProps {
  /** @default false */
  lazyMount?: boolean;
  /** @default true */
  keepMounted?: boolean;
}

export interface CreatePresenceProps extends PresenceStrategyProps {
  present: boolean;
}

export interface CreatePresenceReturn {
  ref: Action;
  getPresenceProps: () => HTMLAttributes<HTMLElement>;
  mounted: boolean;
}

export function createPresence(
  props: CreatePresenceProps,
): CreatePresenceReturn {
  const present = $derived(props.present);
  const lazyMount = $derived(props.lazyMount ?? false);
  const keepMounted = $derived(props.keepMounted ?? true);

  const context = $derived({
    get present() {
      return present;
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

  let wasPresent = $state(false);

  $effect(() => {
    if (!api.present) return;
    if (wasPresent) return;
    wasPresent = true;
  });

  const unmounted = $derived.by(() => {
    if (api.present) return false;
    if (!wasPresent && lazyMount) return true;
    if (wasPresent && !keepMounted) return true;
    return false;
  });

  const ref: Action = (node: HTMLElement) => {
    api.setNode(node);
  };

  return {
    ref,
    getPresenceProps,
    get mounted() {
      return !unmounted;
    },
  };
}
