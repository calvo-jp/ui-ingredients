<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {CreateBreadcrumbsReturn} from './create-breadcrumbs.js';

  export interface BreadcrumbsProps
    extends HtmlIngredientProps<'nav', HTMLElement, CreateBreadcrumbsReturn> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {setBreadcrumbsContext} from './breadcrumbs-context.svelte.js';
  import {createBreadcrumbs} from './create-breadcrumbs.js';

  let {ref, asChild, children, ...props}: BreadcrumbsProps = $props();

  let breadcrumbs = createBreadcrumbs();

  let attrs = $derived(mergeProps(breadcrumbs.getRootProps(), props));

  setBreadcrumbsContext(breadcrumbs);
</script>

{#if asChild}
  {@render asChild(attrs, breadcrumbs)}
{:else}
  <nav bind:this={ref} {...attrs}>
    {@render children?.(breadcrumbs)}
  </nav>
{/if}
