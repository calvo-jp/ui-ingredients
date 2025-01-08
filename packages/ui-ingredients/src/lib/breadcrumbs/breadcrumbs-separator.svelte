<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface BreadcrumbsSeparatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getBreadcrumbsContext} from './breadcrumbs-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: BreadcrumbsSeparatorProps = $props();

  let breadcrumbs = getBreadcrumbsContext();

  let attrs = $derived(mergeProps(breadcrumbs.getSeparatorProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span bind:this={ref} {...attrs}>
    {@render children?.()}
  </span>
{/if}
