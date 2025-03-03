<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreatePopoverProps,
    CreatePopoverReturn,
  } from './create-popover.svelte.js';

  export interface PopoverProps
    extends Optional<CreatePopoverProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreatePopoverReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';
  import {setPopoverContext} from './popover-context.svelte.js';

  let {id, children, ...rest}: PopoverProps = $props();
  let uid = $props.id();

  let [createPopoverProps, presenceStrategyProps] = $derived(
    createSplitProps<Omit<CreatePopoverProps, 'id'>>([
      'autoFocus',
      'closeOnEscape',
      'closeOnInteractOutside',
      'defaultOpen',
      'ids',
      'initialFocusEl',
      'modal',
      'onEscapeKeyDown',
      'onFocusOutside',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'open',
      'persistentElements',
      'portalled',
      'positioning',
    ])(rest),
  );

  let popover = createPopover(
    reflect(() => ({...createPopoverProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: popover.open,
    })),
  );

  setPopoverContext(popover);
  setPresenceContext(presence);
</script>

{@render children?.(popover)}
