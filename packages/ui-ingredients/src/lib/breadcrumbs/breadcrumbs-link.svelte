<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {LinkProps} from './create-breadcrumbs.js';

  export interface BreadcrumbsLinkProps
    extends Assign<HtmlIngredientProps<'a', HTMLAnchorElement>, LinkProps> {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsLinkProps = $props();

  let [linkProps, localProps] = $derived(
    createSplitProps<LinkProps>(['href', 'current'])(props),
  );

  let breadcrumbs = getBreadcrumbsContext();
  let mergedProps = $derived(
    mergeProps(breadcrumbs.getLinkProps(linkProps), localProps),
  );
</script>

<!-- 
  @component
  @deprecated
 -->

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <a bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </a>
{/if}
