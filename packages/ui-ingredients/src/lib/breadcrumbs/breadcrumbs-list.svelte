<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface BreadcrumbsListProps
    extends HtmlIngredientProps<'ol', HTMLOListElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsListProps = $props();

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
