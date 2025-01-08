<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {
    CreateDrawerProps,
    CreateDrawerReturn,
  } from './create-drawer.svelte.js';

  export interface DrawerProps
    extends CreateDrawerProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateDrawerReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '../presence/presence-context.svelte.js';
  import {createDrawer} from './create-drawer.svelte.js';
  import {setDrawerContext} from './drawer-context.svelte.js';

  let {children, ...props}: DrawerProps = $props();

  let [presenceStrategyProps, createDialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let drawer = createDrawer(reflect(() => createDialogProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: drawer.open,
    })),
  );

  setDrawerContext(drawer);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(drawer)}
