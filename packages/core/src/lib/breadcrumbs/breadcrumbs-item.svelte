<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface BreadcrumbsItemProps
    extends HtmlIngredientProps<'li', HTMLLIElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createBreadcrumbs} from './create-breadcrumbs.js';

  let {ref, asChild, children, ...props}: BreadcrumbsItemProps = $props();

  let breadcrumbs = createBreadcrumbs();

  let attrs = $derived(mergeProps(breadcrumbs.getItemProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <li bind:this={ref} {...attrs}>
    {@render children?.()}
  </li>
{/if}
