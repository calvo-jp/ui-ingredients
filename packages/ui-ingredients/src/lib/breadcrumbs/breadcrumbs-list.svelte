<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface BreadcrumbsListProps
    extends HtmlIngredientProps<'ol', HTMLOListElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsListProps = $props();

  let breadcrumbs = getBreadcrumbsContext();
  let mergedProps = $derived(mergeProps(breadcrumbs.getListProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <ol bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </ol>
{/if}
