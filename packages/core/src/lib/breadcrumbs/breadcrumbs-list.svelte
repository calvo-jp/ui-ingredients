<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface BreadcrumbsListProps
    extends HtmlIngredientProps<'ol', HTMLOListElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {ref, asChild, children, ...props}: BreadcrumbsListProps = $props();

  let breadcrumbs = getBreadcrumbsContext();

  let attrs = $derived(mergeProps(breadcrumbs.getListProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <ol bind:this={ref} {...attrs}>
    {@render children?.()}
  </ol>
{/if}
