<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DrawerBodyProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDrawerContext} from './drawer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DrawerBodyProps = $props();

  let drawer = getDrawerContext();

  let mergedProps = $derived(mergeProps(drawer.getBodyProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
