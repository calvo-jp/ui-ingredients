<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateClipboardProps, CreateClipboardReturn} from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateClipboardProps> {
    children?: Snippet<[api: CreateClipboardReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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

  let context = createClipboard({
    id,
    ids,
    value: $state.snapshot(value),
    timeout,
    onStatusChange,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  clipboardContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
