<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {type CreateAvatarProps, type CreateAvatarReturn} from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateAvatarProps> {
    children?: Snippet<[api: CreateAvatarReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {avatarContext} from './context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {
    /**/
    id,
    ids,
    onStatusChange,
    children,
    ...props
  }: AvatarProps = $props();

  let context = createAvatar({
    id,
    ids,
    onStatusChange,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  avatarContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
