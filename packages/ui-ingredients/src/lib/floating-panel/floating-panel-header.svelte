<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelHeaderProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelHeaderProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(mergeProps(floatingPanel.getHeaderProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
