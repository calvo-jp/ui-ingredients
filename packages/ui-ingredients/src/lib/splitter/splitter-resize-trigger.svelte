<script lang="ts" module>
  import type {ResizeTriggerProps} from '@zag-js/splitter';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SplitterResizeTriggerProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement>,
      ResizeTriggerProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {getSplitterContext} from './splitter-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SplitterResizeTriggerProps = $props();

  let [resizeTriggerProps, localProps] = $derived(
    createSplitProps<ResizeTriggerProps>(['id', 'disabled'])(props),
  );

  let splitter = getSplitterContext();
  let mergedProps = $derived(
    mergeProps(splitter.getResizeTriggerProps(resizeTriggerProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
