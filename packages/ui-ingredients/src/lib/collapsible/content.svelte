<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CollapsibleContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCollapsibleContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: CollapsibleContentProps = $props();

  let collapsible = getCollapsibleContext();

  let mergedProps = $derived(mergeProps(props, collapsible.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
