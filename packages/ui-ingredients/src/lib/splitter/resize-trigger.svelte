<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ResizeTriggerProps} from '@zag-js/splitter';

  /* Currently not exported in zag */
  interface ResizeTriggerState {
    min: number | undefined;
    max: number | undefined;
    value: number;
    focused: boolean;
    disabled: boolean;
    panelIds: string[];
  }

  export interface SplitterResizeTriggerProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, ResizeTriggerProps> {
    children?: Snippet<[state: ResizeTriggerState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import type {Snippet} from 'svelte';
  import {splitterContext} from './context.svelte.js';

  let {id, step, disabled, children, ...props}: SplitterResizeTriggerProps = $props();

  let splitter = splitterContext.get();
  let resizeTriggerProps: ResizeTriggerProps = $derived({
    id,
    step,
    disabled,
  });

  let attrs = $derived(mergeProps(props, splitter.getResizeTriggerProps(resizeTriggerProps)));
  let state = $derived(splitter.getResizeTriggerState(resizeTriggerProps));
</script>

<div {...attrs}>
  {@render children?.(state)}
</div>
