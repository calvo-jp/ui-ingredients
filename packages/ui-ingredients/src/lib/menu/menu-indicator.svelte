<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuIndicatorProps = $props();

  let menu = getMenuContext();

  let mergedProps = $derived(mergeProps(props, menu.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
