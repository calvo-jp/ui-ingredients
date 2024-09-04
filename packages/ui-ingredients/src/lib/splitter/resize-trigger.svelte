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
      HtmlIngredientProps<'div', ResizeTriggerState>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getSplitterContext} from './context.svelte.js';

  let {asChild, children, ...props}: SplitterResizeTriggerProps = $props();

  let splitter = getSplitterContext();

  let [resizeTriggerProps, otherProps] = $derived(
    createSplitProps<ResizeTriggerProps>(['id', 'step', 'disabled'])(props),
  );

  let itemState = $derived(splitter.getResizeTriggerState(resizeTriggerProps));

  let mergedProps = $derived(
    mergeProps(otherProps, splitter.getResizeTriggerProps(resizeTriggerProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
