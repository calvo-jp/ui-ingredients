<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TourContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getTourContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TourContentProps = $props();

  let tour = getTourContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, tour.getContentProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(mergedProps)}
  {:else}
    <div bind:this={e} use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
