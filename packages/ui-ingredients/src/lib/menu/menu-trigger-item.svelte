<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuTriggerItemIndicatorProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getMenuTriggerItemContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuTriggerItemIndicatorProps = $props();

  let menuTriggerItemProps = getMenuTriggerItemContext();
  let mergedProps = $derived(mergeProps(menuTriggerItemProps, props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
