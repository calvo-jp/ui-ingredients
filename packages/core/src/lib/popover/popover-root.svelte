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
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
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
