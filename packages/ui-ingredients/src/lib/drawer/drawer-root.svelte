<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateDrawerProps,
    CreateDrawerReturn,
  } from './create-drawer.svelte.js';

  export interface DrawerProps
    extends Optional<CreateDrawerProps, 'id'>,
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

  let {id, children, ...rest}: DrawerProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createDialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let drawer = createDrawer(
    reflect(() => ({...createDialogProps, id: id ?? uid})),
  );

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
