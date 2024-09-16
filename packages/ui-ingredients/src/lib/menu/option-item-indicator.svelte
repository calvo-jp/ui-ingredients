<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getMenuContext,
    getMenuOptionItemPropsContext,
  } from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: MenuOptionItemIndicatorProps = $props();

  let menu = getMenuContext();

  let itemProps = getMenuOptionItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, menu.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
