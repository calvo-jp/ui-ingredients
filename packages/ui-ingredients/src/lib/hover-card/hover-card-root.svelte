<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateHoverCardProps,
    CreateHoverCardReturn,
  } from './create-hover-card.svelte.js';

  export interface HoverCardProps
    extends Optional<CreateHoverCardProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateHoverCardReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';
  import {setHoverCardContext} from './hover-card-context.svelte.js';

  let {id, children, ...props}: HoverCardProps = $props();

  let uid = $props.id();

  let [createHoverCardProps, presenceStrategyProps] = $derived(
    createSplitProps<Omit<CreateHoverCardProps, 'id'>>([
      'closeDelay',
      'defaultOpen',
      'ids',
      'onFocusOutside',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'open',
      'openDelay',
      'positioning',
    ])(props),
  );

  let hoverCard = createHoverCard(
    reflect(() => ({...createHoverCardProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: hoverCard.open,
    })),
  );

  setHoverCardContext(hoverCard);
  setPresenceContext(presence);
</script>

{@render children?.(hoverCard)}
