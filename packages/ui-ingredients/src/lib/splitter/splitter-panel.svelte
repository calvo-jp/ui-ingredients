<script lang="ts" module>
  import type {PanelProps} from '@zag-js/splitter';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface SplitterPanelProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, PanelProps> {}
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
  }: SplitterPanelProps = $props();

  let [panelProps, localProps] = $derived(
    createSplitProps<PanelProps>(['id', 'snapSize'])(props),
  );

  let splitter = getSplitterContext();
  let mergedProps = $derived(
    mergeProps(splitter.getPanelProps(panelProps), localProps),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
