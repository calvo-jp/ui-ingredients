<script lang="ts" context="module">
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
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getSplitterContext} from './splitter-context.svelte.js';

  let {
    this: e,
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
    mergeProps(localProps, splitter.getResizeTriggerProps(resizeTriggerProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
