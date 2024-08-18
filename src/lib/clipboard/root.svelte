<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateClipboardContextProps} from './context.svelte.js';

  export interface ClipboardProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateClipboardContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createClipboardContext, setClipboardContext} from './context.svelte.js';

  let {
    id = nanoid(),
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

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setClipboardContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
