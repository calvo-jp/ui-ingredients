<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectItemIndicatorProps
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
  }: SelectItemIndicatorProps = $props();

  let select = getSelectContext();
  let itemProps = getSelectItemPropsContext();
  let mergedProps = $derived(
    mergeProps(select.getItemIndicatorProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
