<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';

  export interface SplitterPanelProps
    extends Assign<HtmlIngredientProps<'div', HTMLDivElement>, PanelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getSplitterContext} from './splitter-context.svelte.js';

  let {this: e, asChild, children, ...props}: SplitterPanelProps = $props();

  let splitter = getSplitterContext();

  let [panelProps, localProps] = $derived(
    createSplitProps<PanelProps>(['id', 'snapSize'])(props),
  );

  let mergedProps = $derived(
    mergeProps(localProps, splitter.getPanelProps(panelProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
