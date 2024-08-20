<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {type CreateAvatarContextProps, type CreateAvatarContextReturn} from './context.svelte.js';

  export interface AvatarProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateAvatarContextProps>
    > {
    children?: Snippet<[context: CreateAvatarContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createAvatarContext, setAvatarContext} from './context.svelte.js';

  let {
    id = uuid(),
    ids,
    dir,
    getRootNode,
    onStatusChange,
    children,
    ...props
  }: AvatarProps = $props();

  let context = createAvatarContext({
    id,
    ids,
    dir,
    getRootNode,
    onStatusChange,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setAvatarContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
