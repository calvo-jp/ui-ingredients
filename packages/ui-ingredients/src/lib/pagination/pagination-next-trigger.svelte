<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PaginationNextTriggerProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(props, pagination.getNextTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
