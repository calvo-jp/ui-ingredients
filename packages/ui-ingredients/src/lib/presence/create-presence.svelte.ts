import * as presence from '@zag-js/presence';
import {normalizeProps, useMachine} from '@zag-js/svelte';
import type {Action} from 'svelte/action';
import type {HTMLAttributes} from 'svelte/elements';

export interface PresenceStrategyProps {
  /** @default false */
  lazyMount?: boolean;
  /** @default true */
  keepMounted?: boolean;
  /** @default true */
  animateOnMount?: boolean;
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
  const {present, lazyMount, keepMounted, animateOnMount} = $derived(
    Object.assign(
      {
        lazyMount: false,
        keepMounted: true,
        animateOnMount: true,
      },
      props,
    ),
  );

  const service = useMachine(presence.machine, props);
  const api = $derived(presence.connect(service, normalizeProps));

  function getPresenceProps(): HTMLAttributes<HTMLElement> {
    return {
      hidden: !api.present,
      'data-state':
        api.skip && !animateOnMount ? undefined : present ? 'open' : 'closed',
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
