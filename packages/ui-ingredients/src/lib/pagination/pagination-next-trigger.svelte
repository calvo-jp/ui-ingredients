<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PaginationNextTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PaginationNextTriggerProps = $props();

  let pagination = getPaginationContext();
  let mergedProps = $derived(
    mergeProps(pagination.getNextTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
