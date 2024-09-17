<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelMinimizeTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: FloatingPanelMinimizeTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(
    mergeProps(props, floatingPanel.getMinimizeTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
