<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuOptionItemIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getMenuContext,
    getMenuOptionItemPropsContext,
  } from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuOptionItemIndicatorProps = $props();

  let menu = getMenuContext();
  let itemProps = getMenuOptionItemPropsContext();
  let mergedProps = $derived(
    mergeProps(menu!.getItemIndicatorProps(itemProps), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
