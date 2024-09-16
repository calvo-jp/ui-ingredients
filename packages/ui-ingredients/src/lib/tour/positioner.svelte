<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourPositionerProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourPositionerProps = $props();

  let tour = getTourContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, tour.getPositionerProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={e} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
