<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreateHoverCardProps,
    CreateHoverCardReturn,
  } from './create-hover-card.svelte.js';

  export interface HoverCardProps extends CreateHoverCardProps {
    children?: Snippet<[CreateHoverCardReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setHoverCardContext} from './context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';

  let {children, ...props}: HoverCardProps = $props();

  let hoverCard = createHoverCard(props);
  let presence = createPresence({
    get present() {
      return hoverCard.open;
    },
  });

  setHoverCardContext(hoverCard);
  setPresenceContext(presence);
</script>

{@render children?.(hoverCard)}
