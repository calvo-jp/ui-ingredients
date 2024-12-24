<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {
    CreatePopoverProps,
    CreatePopoverReturn,
  } from './create-popover.svelte.js';

  export interface PopoverProps
    extends CreatePopoverProps,
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

  let {children, ...props}: PopoverProps = $props();

  let [createPopoverProps, presenceStrategyProps] = $derived(
    createSplitProps<CreatePopoverProps>([
      'id',
      'ids',
      'open',
      'openControlled',
      'modal',
      'autoFocus',
      'portalled',
      'positioning',
      'closeOnEscape',
      'initialFocusEl',
      'persistentElements',
      'closeOnInteractOutside',
      'onOpenChange',
      'onFocusOutside',
      'onEscapeKeyDown',
      'onInteractOutside',
      'onPointerDownOutside',
    ])(props),
  );

  let popover = createPopover(reflect(() => createPopoverProps));
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
