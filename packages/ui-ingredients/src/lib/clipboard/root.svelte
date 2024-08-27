<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateClipboardProps, CreateClipboardReturn} from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateClipboardProps> {
    children?: Snippet<[clipboard: CreateClipboardReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';
  import {createClipboard} from './create-clipboard.svelte.js';

  let {
    /**/
    id,
    ids,
    value,
    timeout,
    onStatusChange,
    children,
    ...props
  }: ClipboardProps = $props();

  let clipboard = createClipboard({
    id,
    ids,
    value: $state.snapshot(value),
    timeout,
    onStatusChange,
  });

  let attrs = $derived(mergeProps(props, clipboard.getRootProps()));

  clipboardContext.set(clipboard);
</script>

<div {...attrs}>
  {@render children?.(clipboard)}
</div>
