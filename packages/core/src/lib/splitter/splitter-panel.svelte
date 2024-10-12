<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';

  export interface SplitterPanelProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, PanelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getSplitterContext} from './splitter-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SplitterPanelProps = $props();

  let splitter = getSplitterContext();

  let [panelProps, localProps] = $derived(
    createSplitProps<PanelProps>(['id', 'snapSize'])(props),
  );

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
