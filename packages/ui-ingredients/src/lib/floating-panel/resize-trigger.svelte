<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/floating-panel';

  export interface FloatingPanelResizeTriggerProps
    extends Assign<HtmlIngredientProps<'button'>, ResizeTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {axis, asChild, children, ...props}: FloatingPanelResizeTriggerProps =
    $props();

  let floatingPanel = getFloatingPanelContext();

  let mergedProps = $derived(
    mergeProps(props, floatingPanel.getResizeTriggerProps({axis})),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
