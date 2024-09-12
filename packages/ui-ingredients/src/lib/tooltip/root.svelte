<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTooltipProps,
    CreateTooltipReturn,
  } from './create-tooltip.svelte.js';

  export interface TooltipProps
    extends CreateTooltipProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTooltipContext} from './context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';

  let {children, ...props}: TooltipProps = $props();

  let [presenceStrategyProps, tooltipProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let tooltip = createTooltip(reflect(() => tooltipProps));
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
