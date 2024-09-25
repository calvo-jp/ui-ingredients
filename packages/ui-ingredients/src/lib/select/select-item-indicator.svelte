<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSelectContext,
    getSelectItemPropsContext,
  } from './select-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: SelectItemIndicatorProps = $props();

  let select = getSelectContext();
  let itemProps = getSelectItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, select.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
