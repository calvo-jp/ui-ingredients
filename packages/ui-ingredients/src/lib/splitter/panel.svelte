<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';

  export interface SplitterPanelProps
    extends Assign<HTMLProps<'div'>, PanelProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';

  let {asChild, children, ...props}: SplitterPanelProps = $props();

  let splitter = splitterContext.get();

  let [panelProps, otherProps] = $derived(
    createSplitProps<PanelProps>(['id', 'snapSize'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, splitter.getPanelProps(panelProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
