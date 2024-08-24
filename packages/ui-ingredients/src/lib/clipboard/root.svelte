<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateClipboardProps, CreateClipboardReturn} from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, Omit<CreateClipboardProps, 'id'>> {
    children?: Snippet<[api: CreateClipboardReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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
    getRootNode,
    children,
    ...props
  }: ClipboardProps = $props();

  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createClipboard({
    id: id ?? uid,
    ids,
    value: $state.snapshot(value),
    timeout,
    onStatusChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  clipboardContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
