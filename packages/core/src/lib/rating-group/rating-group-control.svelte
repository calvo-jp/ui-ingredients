<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface RatingGroupControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupControlProps = $props();

  let ratingGroup = getRatingGroupContext();

  let mergedProps = $derived(mergeProps(ratingGroup.getControlProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
