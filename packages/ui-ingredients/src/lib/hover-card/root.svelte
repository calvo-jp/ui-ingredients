<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
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
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setHoverCardContext} from './context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';

  let {children, ...props}: HoverCardProps = $props();

  let [hoverCardProps, presenceStrategyProps] = $derived(
    createSplitProps<CreateHoverCardProps>([
      'id',
      'ids',
      'open',
      'openDelay',
      'closeDelay',
      'defaultOpen',
      'positioning',
      'onOpenChange',
    ])(props),
  );

  let hoverCard = createHoverCard(reflect(() => hoverCardProps));

  let presence = createPresence({
    get present() {
      return hoverCard.open;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  setHoverCardContext(hoverCard);
  setPresenceContext(presence);
</script>

{@render children?.(hoverCard)}
