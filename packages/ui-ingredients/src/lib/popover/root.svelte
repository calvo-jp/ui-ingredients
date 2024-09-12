<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
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
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setPopoverContext} from './context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';

  let {children, ...props}: PopoverProps = $props();

  let [popoverProps, presenceStrategyProps] = $derived(
    createSplitProps<CreatePopoverProps>([
      'autoFocus',
      'closeOnEscape',
      'closeOnInteractOutside',
      'defaultOpen',
      'id',
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
    ])(props),
  );

  let popover = createPopover(reflect(() => popoverProps));
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
