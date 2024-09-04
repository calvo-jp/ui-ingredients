<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: RatingGroupLabelProps = $props();

  let ratingGroup = getRatingGroupContext();

  let mergedProps = $derived(mergeProps(props, ratingGroup.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
