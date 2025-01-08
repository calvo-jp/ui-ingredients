<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelTitleProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelTitleProps = $props();

  let floatingPanel = getFloatingPanelContext();
  let mergedProps = $derived(mergeProps(floatingPanel.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
