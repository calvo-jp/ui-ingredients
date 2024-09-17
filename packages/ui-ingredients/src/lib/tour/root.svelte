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
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setTourContext} from './context.svelte.js';
  import {createTour} from './create-tour.svelte.js';

  let {children, ...props}: TourProps = $props();

  let [presenceStrategyProps, tourProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let tour = createTour(reflect(() => tourProps));

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: tour.currentStep != null,
    })),
  );

  setTourContext(tour);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(tour)}
