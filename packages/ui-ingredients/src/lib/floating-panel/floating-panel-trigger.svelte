<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FloatingPanelTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(
    mergeProps(props, floatingPanel.getTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
