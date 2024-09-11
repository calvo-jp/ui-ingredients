<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/floating-panel';

  export interface FloatingPanelResizeTriggerProps
    extends Assign<HtmlIngredientProps<'button'>, ResizeTriggerProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getFloatingPanelContext} from './context.svelte.js';

  let {asChild, children, ...props}: FloatingPanelResizeTriggerProps = $props();

  let floatingPanel = getFloatingPanelContext();

  let [resizeTriggerProps, otherProps] = $derived(
    createSplitProps<ResizeTriggerProps>([])(props),
  );

  let mergedProps = $derived(
    mergeProps(
      otherProps,
      floatingPanel.getResizeTriggerProps(resizeTriggerProps),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
