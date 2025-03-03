<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateTourProps,
    CreateTourReturn,
  } from './create-tour.svelte.js';

  export interface TourProps
    extends Optional<CreateTourProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateTourReturn]>;
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
  import {createTour} from './create-tour.svelte.js';
  import {setTourContext} from './tour-context.svelte.js';

  let {id, children, ...rest}: TourProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createTourProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let tour = createTour(reflect(() => ({...createTourProps, id: id ?? uid})));

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: tour.open,
    })),
  );

  setTourContext(tour);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(tour)}
