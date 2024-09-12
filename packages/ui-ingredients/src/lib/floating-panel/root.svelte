<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateFloatingPanelProps,
    CreateFloatingPanelReturn,
  } from './create-floating-panel.svelte.js';

  export interface FloatingPanelProps
    extends CreateFloatingPanelProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateFloatingPanelReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setFloatingPanelContext} from './context.svelte.js';
  import {createFloatingPanel} from './create-floating-panel.svelte.js';

  let {children, ...props}: FloatingPanelProps = $props();

  let [presenceStrategyProps, floatingPanelProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let floatingPanel = createFloatingPanel(reflect(() => floatingPanelProps));

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: floatingPanel.open,
    })),
  );

  setFloatingPanelContext(floatingPanel);
  setPresenceContext(presence);
</script>

{@render children?.(floatingPanel)}
