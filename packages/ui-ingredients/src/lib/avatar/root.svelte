<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {type CreateAvatarProps, type CreateAvatarReturn} from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateAvatarProps> {
    asChild?: AsChild<CreateAvatarReturn>;
    children?: Snippet<[CreateAvatarReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {avatarContext} from './context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {id, ids, onStatusChange, asChild, children, ...props}: AvatarProps = $props();

  let avatar = createAvatar({
    id,
    ids,
    onStatusChange,
  });

  let attrs = $derived(mergeProps(props, avatar.getRootProps()));

  avatarContext.set(avatar);
</script>

{#if asChild}
  {@render asChild(attrs, avatar)}
{:else}
  <div {...attrs}>
    {@render children?.(avatar)}
  </div>
{/if}
