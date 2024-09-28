<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationPrevTriggerProps
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
  }: PaginationPrevTriggerProps = $props();

  let pagination = getPaginationContext();

  let mergedProps = $derived(
    mergeProps(props, pagination.getPrevTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
