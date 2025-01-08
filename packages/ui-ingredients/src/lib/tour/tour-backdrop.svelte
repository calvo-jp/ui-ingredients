<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface TourBackdropProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {getTourContext} from './tour-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: TourBackdropProps = $props();

  let tour = getTourContext();
  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: tour.step?.backdrop ? tour.open : false,
    })),
  );

  let mergedProps = $derived(
    mergeProps(tour.getBackdropProps(), presence.getPresenceProps(), props),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={ref} use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
