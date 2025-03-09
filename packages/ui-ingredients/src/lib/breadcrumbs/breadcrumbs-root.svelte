<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';
  import type {CreateBreadcrumbsReturn} from './create-breadcrumbs.js';

  export interface BreadcrumbsProps
    extends HtmlIngredientProps<'nav', HTMLElement, CreateBreadcrumbsReturn> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {setBreadcrumbsContext} from './breadcrumbs-context.svelte.js';
  import {createBreadcrumbs} from './create-breadcrumbs.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsProps = $props();

  let breadcrumbs = createBreadcrumbs();
  let mergedProps = $derived(mergeProps(breadcrumbs.getRootProps(), props));

  setBreadcrumbsContext(breadcrumbs);
</script>

<!-- 
  @component
  @deprecated
 -->

{#if asChild}
  {@render asChild(mergedProps, breadcrumbs)}
{:else}
  <nav bind:this={ref} {...mergedProps}>
    {@render children?.(breadcrumbs)}
  </nav>
{/if}
