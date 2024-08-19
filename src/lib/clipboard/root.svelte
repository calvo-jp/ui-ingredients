<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateClipboardContextProps,
    CreateClipboardContextReturn,
  } from './context.svelte.js';

  export interface ClipboardProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateClipboardContextProps>
    > {
    children?: Snippet<[CreateClipboardContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createClipboardContext, setClipboardContext} from './context.svelte.js';

  let {
    id = uuid(),
    ids,
    value,
    timeout,
    onStatusChange,
    getRootNode,
    children,
    ...props
  }: ClipboardProps = $props();

  let context = createClipboardContext({
    id,
    ids,
    value,
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
