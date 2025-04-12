<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateFloatingPanelProps,
    CreateFloatingPanelReturn,
  } from './create-floating-panel.svelte.js';

  export interface FloatingPanelProps
    extends Optional<CreateFloatingPanelProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateFloatingPanelReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createFloatingPanel} from './create-floating-panel.svelte.js';
  import {setFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {id, children, ...props}: FloatingPanelProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createFloatingPanelProps] = $derived(
    createSplitProps<PresenceStrategyProps>([
      'lazyMount',
      'keepMounted',
      'animateOnMount',
    ])(props),
  );

  let floatingPanel = createFloatingPanel(
    reflect(() => ({...createFloatingPanelProps, id: id ?? uid})),
  );

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
