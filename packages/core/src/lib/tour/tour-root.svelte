<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {
    CreateTourProps,
    CreateTourReturn,
  } from './create-tour.svelte.js';

  export interface TourProps extends CreateTourProps, PresenceStrategyProps {
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

  let {children, ...props}: TourProps = $props();

  let [presenceStrategyProps, createTourProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let tour = createTour(reflect(() => createTourProps));

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
