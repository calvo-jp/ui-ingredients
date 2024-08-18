<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateCollapsibleContextProps,
    CreateCollapsibleContextReturn,
  } from './context.svelte.js';

  export interface CollapsibleProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateCollapsibleContextProps>
    > {
    children?: Snippet<[CreateCollapsibleContextReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createCollapsibleContext, setCollapsibleContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    open,
    'open.controlled': openControlled,
    disabled,
    onOpenChange,
    onExitComplete,
    getRootNode,
    children,
    ...props
  }: CollapsibleProps = $props();

  let context = createCollapsibleContext({
    id,
    ids,
    dir,
    open,
    'open.controlled': openControlled,
    disabled,
    onOpenChange,
    onExitComplete,
    getRootNode,
  });

  let mergedProps = $derived(mergeProps(props, context.getRootProps()));

  setCollapsibleContext(context);
</script>

<div {...mergedProps}>
  {@render children?.(context)}
</div>
