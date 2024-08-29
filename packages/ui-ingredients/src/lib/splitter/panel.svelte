<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';

  export interface SplitterPanelProps extends Assign<HTMLProps<'div'>, PanelProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';

  let {id, snapSize, asChild, children, ...props}: SplitterPanelProps = $props();

  let splitter = splitterContext.get();

  let mergedProps = $derived(
    mergeProps(
      props,
      splitter.getPanelProps({
        id,
        snapSize,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
