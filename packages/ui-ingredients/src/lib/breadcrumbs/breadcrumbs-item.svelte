<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface BreadcrumbsItemProps
    extends HtmlIngredientProps<'li', HTMLLIElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {createBreadcrumbs} from './create-breadcrumbs.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsItemProps = $props();

  let breadcrumbs = createBreadcrumbs();
  let mergedProps = $derived(mergeProps(breadcrumbs.getItemProps(), props));
</script>

<!-- 
  @component
  @deprecated
 -->

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <li bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </li>
{/if}
