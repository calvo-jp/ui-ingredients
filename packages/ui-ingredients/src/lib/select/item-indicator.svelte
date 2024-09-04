<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSelectContext,
    getSelectItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemIndicatorProps = $props();

  let select = getSelectContext();
  let itemProps = getSelectItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, select.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
