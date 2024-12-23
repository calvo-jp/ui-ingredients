<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/floating-panel';

  export interface FloatingPanelResizeTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelResizeTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let [resizeTriggerProps, localProps] = $derived(
    createSplitProps<ResizeTriggerProps>([])(props),
  );

  let mergedProps = $derived(
    mergeProps(
      floatingPanel.getResizeTriggerProps(resizeTriggerProps),
      localProps,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
