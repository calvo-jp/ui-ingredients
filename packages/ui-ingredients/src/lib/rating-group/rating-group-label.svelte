<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupLabelProps = $props();

  let ratingGroup = getRatingGroupContext();

  let mergedProps = $derived(mergeProps(props, ratingGroup.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
