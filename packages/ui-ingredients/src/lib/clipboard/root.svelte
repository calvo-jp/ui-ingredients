<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateClipboardContextProps,
    CreateClipboardContextReturn,
  } from './context.svelte.js';

  export interface ClipboardProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateClipboardContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateClipboardContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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

  let environmentContext = useEnvironmentContext();

  let context = createClipboardContext({
    id: id ?? createUniqueId(),
    ids,
    value: $state.snapshot(value),
    timeout,
    onStatusChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setClipboardContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
