<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreatePopoverProps,
    CreatePopoverReturn,
  } from './create-popover.svelte.js';

  export interface PopoverProps extends CreatePopoverProps {
    children?: Snippet<[CreatePopoverReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPopoverContext} from './context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';

  let {children, ...props}: PopoverProps = $props();

  let popover = createPopover(props);
  let presence = createPresence({
    get present() {
      return popover.open;
    },
  });

  setPopoverContext(popover);
  setPresenceContext(presence);
</script>

{@render children?.(popover)}
