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

export interface CreatePresenceProps
  extends PresenceStrategyProps,
    presence.Props {}

export interface CreatePresenceReturn {
  setReference: Action;
  getPresenceProps(): HTMLAttributes<HTMLElement>;
  mounted: boolean;
}

export function createPresence(
  props: CreatePresenceProps,
): CreatePresenceReturn {
  const service = useMachine(presence.machine, () => ({
    present: props.present,
    immediate: props.immediate,
    onExitComplete: props.onExitComplete,
  }));

  const api = $derived(presence.connect(service, normalizeProps));

  function getPresenceProps(): HTMLAttributes<HTMLElement> {
    return {
      hidden: !api.present,
      'data-state': props.present ? 'open' : 'closed',
    };
  }

  let wasPresent = $state(false);

  $effect.pre(() => {
    if (api.present) {
      wasPresent = true;
    }
  });

  const unmounted = $derived.by(() => {
    if (!api.present && !wasPresent && props.lazyMount) return true;
    if (!props.keepMounted && !api.present && wasPresent) return true;
    return false;
  });

  const setReference: Action = (node: HTMLElement) => {
    api.setNode(node);
  };

  return {
    setReference,
    getPresenceProps,
    get mounted() {
      return !unmounted;
    },
  };
}
