<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface MenuIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getMenuContext} from './menu-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: MenuIndicatorProps = $props();

  let menu = getMenuContext();
  let mergedProps = $derived(mergeProps(menu!.getIndicatorProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
