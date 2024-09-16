<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelMaximizeTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FloatingPanelMaximizeTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(
    mergeProps(props, floatingPanel.getMaximizeTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
