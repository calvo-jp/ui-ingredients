<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PaginationNextTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPaginationContext} from './context.svelte.js';

  let {
    this: e,
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
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
