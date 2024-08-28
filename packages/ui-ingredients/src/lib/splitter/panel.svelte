<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';
  import type {Snippet} from 'svelte';

  export interface SplitterPanelProps extends Assign<HtmlProps<'div'>, PanelProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';

  let {id, snapSize, asChild, children, ...props}: SplitterPanelProps = $props();

  let splitter = splitterContext.get();

  let attrs = $derived(
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
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
