<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourOverlayProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getTourContext} from './context.svelte.js';

  let {asChild, children, ...props}: TourOverlayProps = $props();

  let tour = getTourContext();

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence({
    get present() {
      return tour.currentStep != null;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  let mergedProps = $derived(
    mergeProps(props, tour.getOverlayProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
