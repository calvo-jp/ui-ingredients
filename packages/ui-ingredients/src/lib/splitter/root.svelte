<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSplitterProps, CreateSplitterReturn} from './create-splitter.svelte.js';

  export interface SplitterProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateSplitterProps> {
    asChild?: AsChild<CreateSplitterReturn>;
    children?: Snippet<[CreateSplitterReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';
  import {createSplitter} from './create-splitter.svelte.js';

  let {asChild, children, ...props}: SplitterProps = $props();

  let [splitterProps, otherProps] = createSplitProps<CreateSplitterProps>([
    'id',
    'ids',
    'size',
    'orientation',
    'onSizeChange',
    'onSizeChangeEnd',
  ])(props);

  let splitter = createSplitter(splitterProps);

  let mergedProps = $derived(mergeProps(otherProps, splitter.getRootProps()));

  splitterContext.set(splitter);
</script>

{#if asChild}
  {@render asChild(mergedProps, splitter)}
{:else}
  <div {...mergedProps}>
    {@render children?.(splitter)}
  </div>
{/if}
