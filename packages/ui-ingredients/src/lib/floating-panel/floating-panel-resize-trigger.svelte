<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/floating-panel';

  export interface FloatingPanelResizeTriggerProps
    extends Assign<
      HtmlIngredientProps<'button', HTMLButtonElement>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
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
      localProps,
      floatingPanel.getResizeTriggerProps(resizeTriggerProps),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
