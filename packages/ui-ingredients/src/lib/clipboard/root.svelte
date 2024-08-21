<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateClipboardContextProps,
    CreateClipboardContextReturn,
  } from './context.svelte.js';

  export interface ClipboardProps
    extends Assign<
      Omit<HtmlIngredientsProps<'div'>, 'children'>,
      Omit<CreateClipboardContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateClipboardContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createClipboardContext,
    setClipboardContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    value,
    timeout,
    onStatusChange,
    getRootNode,
    children,
    ...props
  }: ClipboardProps = $props();

  let context = createClipboardContext({
    id: id ?? uuid(),
    ids,
    value: $state.snapshot(value),
    timeout,
    onStatusChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setClipboardContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
