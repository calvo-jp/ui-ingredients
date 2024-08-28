<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSplitterProps, CreateSplitterReturn} from './create-splitter.svelte.js';

  export interface SplitterProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateSplitterProps> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>, splitter: CreateSplitterReturn]>;
    children?: Snippet<[splitter: CreateSplitterReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {splitterContext} from './context.svelte.js';
  import {createSplitter} from './create-splitter.svelte.js';

  let {
    id,
    ids,
    size,
    orientation,
    onSizeChange,
    onSizeChangeEnd,
    asChild,
    children,
    ...props
  }: SplitterProps = $props();

  let splitter = createSplitter({
    id,
    ids,
    size,
    orientation,
    onSizeChange,
    onSizeChangeEnd,
  });

  let attrs = $derived(mergeProps(props, splitter.getRootProps()));

  splitterContext.set(splitter);
</script>

{#if asChild}
  {@render asChild(attrs, splitter)}
{:else}
  <div {...attrs}>
    {@render children?.(splitter)}
  </div>
{/if}
