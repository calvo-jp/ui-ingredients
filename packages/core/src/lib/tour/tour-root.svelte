<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTourProps,
    CreateTourReturn,
  } from './create-tour.svelte.js';

  export interface TourProps extends CreateTourProps, PresenceStrategyProps {
    children?: Snippet<[CreateTourReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
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
