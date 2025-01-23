<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PaginationPrevTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPaginationContext} from './pagination-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PaginationPrevTriggerProps = $props();

  let pagination = getPaginationContext();
  let mergedProps = $derived(
    mergeProps(pagination.getPrevTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
