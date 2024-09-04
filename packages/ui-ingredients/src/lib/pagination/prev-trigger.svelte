<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationPrevTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPaginationContext} from './context.svelte.js';

  let {asChild, children, ...props}: PaginationPrevTriggerProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(props, pagination.getPrevTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
