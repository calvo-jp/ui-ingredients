<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
    mergeProps(select.getItemTextProps(itemProps), props),
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
