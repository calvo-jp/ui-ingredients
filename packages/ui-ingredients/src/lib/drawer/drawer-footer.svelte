<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DrawerFooterProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getDrawerContext} from './drawer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DrawerFooterProps = $props();

  let drawer = getDrawerContext();
  let mergedProps = $derived(mergeProps(drawer.getFooterProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
