<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSelectContext,
    getSelectItemPropsContext,
  } from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectItemTextProps = $props();

  let select = getSelectContext();
  let itemProps = getSelectItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, select.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {select.collection.stringifyItem(itemProps.item)}
    {/if}
  </span>
{/if}
