<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DrawerDescriptionProps
    extends HtmlIngredientProps<'p', HTMLParagraphElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDrawerContext} from './drawer-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DrawerDescriptionProps = $props();

  let drawer = getDrawerContext();

  let mergedProps = $derived(mergeProps(drawer.getDescriptionProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
