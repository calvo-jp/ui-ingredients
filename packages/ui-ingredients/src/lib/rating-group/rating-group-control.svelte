<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupControlProps = $props();

  let ratingGroup = getRatingGroupContext();

  let mergedProps = $derived(mergeProps(props, ratingGroup.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
