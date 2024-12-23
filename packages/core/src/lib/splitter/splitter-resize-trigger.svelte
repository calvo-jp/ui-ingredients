<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/splitter';

  interface ResizeTriggerState {
    min: number | undefined;
    max: number | undefined;
    value: number;
    focused: boolean;
    disabled: boolean;
    panelIds: string[];
  }

  export interface SplitterResizeTriggerProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, ResizeTriggerState>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {getSplitterContext} from './splitter-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SplitterResizeTriggerProps = $props();

  let splitter = getSplitterContext();

  let [resizeTriggerProps, localProps] = $derived(
    createSplitProps<ResizeTriggerProps>(['id', 'step', 'disabled'])(props),
  );

  let itemState = $derived(splitter.getResizeTriggerState(resizeTriggerProps));

  let mergedProps = $derived(
    mergeProps(splitter.getResizeTriggerProps(resizeTriggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
