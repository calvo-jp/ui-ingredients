<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuOptionItemTextProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getMenuContext,
    getMenuOptionItemPropsContext,
  } from './menu-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: MenuOptionItemTextProps = $props();

  let menu = getMenuContext();

  let itemProps = getMenuOptionItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, menu.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {itemProps.valueText}
    {/if}
  </span>
{/if}
