<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
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
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, ResizeTriggerProps> {
    asChild?: AsChild<ResizeTriggerState>;
    children?: Snippet<[ResizeTriggerState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import type {Snippet} from 'svelte';
  import {splitterContext} from './context.svelte.js';

  let {id, step, disabled, asChild, children, ...props}: SplitterResizeTriggerProps = $props();

  let splitter = splitterContext.get();
  let resizeTriggerProps: ResizeTriggerProps = $derived({
    id,
    step,
    disabled,
  });

  let mergedProps = $derived(mergeProps(props, splitter.getResizeTriggerProps(resizeTriggerProps)));
  let itemState = $derived(splitter.getResizeTriggerState(resizeTriggerProps));
</script>

{#if asChild}
  {@render asChild(mergedProps, itemState)}
{:else}
  <div {...mergedProps}>
    {@render children?.(itemState)}
  </div>
{/if}
