<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(
    mergeProps(floatingPanel.getTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
