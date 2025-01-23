<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DrawerTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getDrawerContext} from './drawer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DrawerTitleProps = $props();

  let drawer = getDrawerContext();
  let mergedProps = $derived(mergeProps(drawer.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
