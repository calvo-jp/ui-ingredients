<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuTriggerItemIndicatorProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getMenuTriggerItemContext} from './menu-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: MenuTriggerItemIndicatorProps = $props();

  let menuTriggerItemProps = getMenuTriggerItemContext();

  let mergedProps = $derived(mergeProps(props, menuTriggerItemProps));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
