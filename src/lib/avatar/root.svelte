<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AvatarProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateAvatarContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {
    createAvatarContext,
    setAvatarContext,
    type CreateAvatarContextProps,
  } from './context.svelte.js';

  let {
    id = nanoid(),
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

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setAvatarContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
