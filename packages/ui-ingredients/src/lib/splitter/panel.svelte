<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {PanelProps} from '@zag-js/splitter';

  export interface SplitterPanelProps extends Assign<HtmlProps<'div'>, PanelProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';

  let {id, snapSize, children, ...props}: SplitterPanelProps = $props();

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

<div {...attrs}>
  {@render children?.()}
</div>
