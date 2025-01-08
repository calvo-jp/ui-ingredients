<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface RatingGroupLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupLabelProps = $props();

  let ratingGroup = getRatingGroupContext();
  let mergedProps = $derived(mergeProps(ratingGroup.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
