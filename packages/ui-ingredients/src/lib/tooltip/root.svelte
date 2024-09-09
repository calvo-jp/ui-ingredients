<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreateTooltipProps,
    CreateTooltipReturn,
  } from './create-tooltip.svelte.js';

  export interface TooltipProps extends CreateTooltipProps {
    children?: Snippet<[CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setTooltipContext} from './context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';

  let {children, ...props}: TooltipProps = $props();

  let tooltip = createTooltip(props);
  let presence = createPresence({
    get present() {
      return tooltip.open;
    },
  });

  setTooltipContext(tooltip);
  setPresenceContext(presence);
</script>

{@render children?.(tooltip)}
