<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
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
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
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
