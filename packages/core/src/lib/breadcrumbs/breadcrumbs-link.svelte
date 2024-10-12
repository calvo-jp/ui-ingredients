<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {LinkProps} from './create-breadcrumbs.js';

  export interface BreadcrumbsLinkProps
    extends Assign<HtmlIngredientProps<'a', HTMLAnchorElement>, LinkProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {ref, asChild, children, ...props}: BreadcrumbsLinkProps = $props();

  let [linkProps, localProps] = $derived(
    createSplitProps<LinkProps>(['href', 'current'])(props),
  );

  let breadcrumbs = getBreadcrumbsContext();

  let attrs = $derived(
    mergeProps(breadcrumbs.getLinkProps(linkProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <a bind:this={ref} {...attrs}>
    {@render children?.()}
  </a>
{/if}
