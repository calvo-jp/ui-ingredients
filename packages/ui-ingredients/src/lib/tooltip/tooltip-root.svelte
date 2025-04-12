<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateTooltipProps,
    CreateTooltipReturn,
  } from './create-tooltip.svelte.js';

  export interface TooltipProps
    extends Optional<CreateTooltipProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';
  import {setTooltipContext} from './tooltip-context.svelte.js';

  let {id, children, ...props}: TooltipProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createTooltipProps] = $derived(
    createSplitProps<PresenceStrategyProps>([
      'lazyMount',
      'keepMounted',
      'animateOnMount',
    ])(props),
  );

  let tooltip = createTooltip(
    reflect(() => ({...createTooltipProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: tooltip.open,
    })),
  );

  setTooltipContext(tooltip);
  setPresenceContext(presence);
</script>

{@render children?.(tooltip)}
