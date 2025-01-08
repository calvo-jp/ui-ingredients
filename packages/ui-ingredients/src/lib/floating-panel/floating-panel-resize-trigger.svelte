<script lang="ts" module>
  import type {ResizeTriggerProps} from '@zag-js/floating-panel';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface FloatingPanelResizeTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {getFloatingPanelContext} from './floating-panel-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FloatingPanelResizeTriggerProps = $props();

  let [resizeTriggerProps, localProps] = $derived(
    createSplitProps<ResizeTriggerProps>([])(props),
  );

  let floatingPanel = getFloatingPanelContext();
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
