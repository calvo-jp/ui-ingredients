<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {
    CreateHoverCardProps,
    CreateHoverCardReturn,
  } from './create-hover-card.svelte.js';

  export interface HoverCardProps
    extends CreateHoverCardProps,
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

  let {children, ...props}: HoverCardProps = $props();

  let [createHoverCardProps, presenceStrategyProps] = $derived(
    createSplitProps<CreateHoverCardProps>([
      'id',
      'ids',
      'open',
      'openControlled',
      'openDelay',
      'closeDelay',
      'positioning',
      'onOpenChange',
    ])(props),
  );

  let hoverCard = createHoverCard(reflect(() => createHoverCardProps));

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
