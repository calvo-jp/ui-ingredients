<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelMaximizeTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelMaximizeTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();
  let mergedProps = $derived(
    mergeProps(floatingPanel.getMaximizeTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
